import { createApp } from './app'
import { connectDatabase } from './config/db'
import { env } from './config/env'

async function bootstrap() {
  await connectDatabase(env.mongoUri)

  const app = createApp()
  app.listen(env.port, () => {
    console.log(`API running at http://localhost:${env.port}`)
  })
}

bootstrap().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
