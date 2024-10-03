import express, { urlencoded } from "express";
import cors from "cors";
import cookieParse from "cookie-parser";

const app = express()

const port = process.env.PORT || 8000;

app.use(cors({

    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json())
app.use(urlencoded({ extended: true }))
// app.use(express.static("public"))
// for storing images files on server

app.use(cookieParse())


export { app }