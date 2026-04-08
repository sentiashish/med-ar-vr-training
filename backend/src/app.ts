import cors from 'cors'
import express from 'express'
import { env } from './config/env'
import { authRouter } from './routes/authRoutes'
import { healthRouter } from './routes/healthRoutes'

export function createApp() {
  const app = express()

  app.use(
    cors({
      origin: env.frontendOrigin,
      credentials: true,
    })
  )

  app.use(express.json())

  app.get('/', (_req, res) => {
    res.json({ message: 'MedVision XR backend running' })
  })

  app.use('/api/health', healthRouter)
  app.use('/api/auth', authRouter)

  app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  })

  return app
}
