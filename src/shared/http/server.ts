import express, { NextFunction, Request, Response } from "express";
import cors from "cors"
import { routes } from './routes/index'
import AppError from '../errors/appError';

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof AppError) return res.status(error.statusCode).json({
    status: 'error',
    message: error.message
  })

  return res.status(500).json({
    status: 'error',
    message: '[Server] Internal server error'
  })
})

app.listen(3333, () => {
  console.log("[Server] Server is running")
})
