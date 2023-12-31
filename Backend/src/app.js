import express from 'express'
import cors from 'cors'
import notesRoute from './routes/notes.routes.js'
import userRoute from './routes/user.Routes.js'
const app = express();

app.use(express.json());
app.use(cors())

app.use("/api",userRoute)
app.use("/api",notesRoute)

export default app;