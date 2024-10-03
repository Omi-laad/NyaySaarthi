import express, { urlencoded } from "express";
import cors from "cors";
import cookieParse from "cookie-parser";

const app = express()


app.use(cors({

    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json())
app.use(urlencoded({ extended: true }))
// app.use(express.static("public"))
// for storing images files on server

app.use(cookieParse())

//routes import

import litigantRouter from "./routes/litigant.route.js"





//routes declaration
app.use("/api/v1/litigant", litigantRouter)


//http:localhost:8000/api/v1/users/{register}


export { app }