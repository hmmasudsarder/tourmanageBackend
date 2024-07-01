import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router';

const app = express();
app.use(express.json())

app.use('/api/user', userRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("server is ongoing")
})

export default app;