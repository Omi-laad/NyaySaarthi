const express = require("express")
const dotenv = require('dotenv').config();
const dbConnect = require("../config/dbConnect");
const authRoutes = require("../routes/autRoutes");
const userRoutes = require("../routes/userRoutes")

dbConnect();


const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


//Start the server
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    console.log(
        `Server is Live at ${PORT}`

    );
})