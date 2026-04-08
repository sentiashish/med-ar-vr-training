import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  PORT: z.string().default('5000'),
  MONGO_URI: z.string().min(1),
  JWT_SECRET: z.string().min(12),
  FRONTEND_ORIGIN: z.string().default('http://localhost:5173'),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = {
  port: Number(parsed.data.PORT),
  mongoUri: parsed.data.MONGO_URI,
  jwtSecret: parsed.data.JWT_SECRET,
  frontendOrigin: parsed.data.FRONTEND_ORIGIN,
}
