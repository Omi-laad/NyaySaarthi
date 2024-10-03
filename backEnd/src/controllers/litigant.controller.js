import express from "express";
import asyncHandler from "../utils/asyncHandler.js";


const registerLitigant = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Litigant registered successfully",
    })

})


export { registerLitigant }