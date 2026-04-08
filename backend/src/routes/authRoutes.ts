import { Router } from 'express'
import { login, me, register } from '../controllers/authController'
import { authMiddleware } from '../middleware/authMiddleware'

const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/me', authMiddleware, me)

export { authRouter }
