import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { env } from '../config/env'
import { UserModel } from '../models/User'
import { AuthenticatedRequest } from '../types/auth'

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

function signToken(userId: string, email: string): string {
  return jwt.sign({ userId, email }, env.jwtSecret, { expiresIn: '7d' })
}

export async function register(req: Request, res: Response) {
  const parsed = registerSchema.safeParse(req.body)

  if (!parsed.success) {
    return res.status(400).json({ message: 'Invalid input', errors: parsed.error.issues })
  }

  const existingUser = await UserModel.findOne({ email: parsed.data.email })

  if (existingUser) {
    return res.status(409).json({ message: 'Email already registered' })
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 10)

  const user = await UserModel.create({
    name: parsed.data.name,
    email: parsed.data.email,
    passwordHash,
  })

  const token = signToken(String(user._id), user.email)

  return res.status(201).json({
    message: 'Registration successful',
    token,
    user: { id: user._id, name: user.name, email: user.email },
  })
}

export async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body)

  if (!parsed.success) {
    return res.status(400).json({ message: 'Invalid input', errors: parsed.error.issues })
  }

  const user = await UserModel.findOne({ email: parsed.data.email })

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const passwordOk = await bcrypt.compare(parsed.data.password, user.passwordHash)

  if (!passwordOk) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = signToken(String(user._id), user.email)

  return res.status(200).json({
    message: 'Login successful',
    token,
    user: { id: user._id, name: user.name, email: user.email },
  })
}

export async function me(req: AuthenticatedRequest, res: Response) {
  return res.status(200).json({ user: req.user })
}
