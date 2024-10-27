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
import lawyerRouter from "./routes/lawyer.route.js"
import lawsRouter from "./routes/lawdetail.route.js"
 import questionRoutes from './routes/question.route.js'
 import answerRoutes from './routes/answer.route.js'
import adminRoutes from './routes/admin.route.js'
import lawyerblogsRouter from './routes/blog.route.js'



//routes declaration
//Litigant
app.use("/api/v1/litigant", litigantRouter)


//Lawyer
app.use("/api/v1/lawyer", lawyerRouter)
//Lawyer blogs
app.use('/api/v1/lawyerblogs', lawyerblogsRouter)


//QnA Feature
app.use('/api/v1/questions', questionRoutes);
app.use('/api/v1/questions', answerRoutes);


//Laws 
app.use("/api/v1/laws", lawsRouter)

//http:localhost:8000/api/v1/users/{register}

// Routes for handling questions and answers
// app.use('/api/v1/questions', questionRoutes);
// app.use('/api/v1/questions', answerRoutes);

//admins
app.use('/api/v1/admins', adminRoutes);






export { app }