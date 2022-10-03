import express from 'express'
import dotenv from 'dotenv'
import {appRouter} from "./routes";
import {connectToDb} from "./config/db";

dotenv.config()
const app = express()
connectToDb()

app.use("/", appRouter)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`api running on http://localhost:${port}`)
})