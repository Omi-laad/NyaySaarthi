import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js"
import { Litigant } from "../models/litigant.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import { upload } from "../middlewares/multer.middlerware.js";
import jwt from "jsonwebtoken"


const generateAccessAndRefreshTokens = async (litigantId) => {

    try {
        const litigant = await Litigant.findById(litigantId)
        const accessToken = litigant.generateAccessToken()
        const refreshToken = litigant.generateRefreshToken()

        litigant.refreshToken = refreshToken
        await litigant.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    }
    catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}



const registerLitigant = asyncHandler(async (req, res) => {

    //get user details
    //Validation - not empty
    //check if user note empty
    //check for images ,check for avtar
    //upload to cloudinary ,avtar
    //create user obj = create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return res
    const { fullName, email, password, mobile, address } = req.body
    if (
        [fullName, email, password, mobile, address].some((field) => field?.trim() === "")

    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await Litigant.findOne({

        $or: [{ fullName }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "Litigant with Email or full Name already exists")
    }

    const profilePhotolocalPath = req.files?.profilePhoto[0]?.path;

    if (!profilePhotolocalPath) {
        throw new ApiError(400, "Profile Photo is required")
    }

    //console.log("ProfilePhoto", profilePhotolocalPath)

    const profilePhoto = await uploadOnCloudinary(profilePhotolocalPath);



    if (!profilePhoto) {
        throw new ApiError(400, "Profile Photo is required")
    }


    const litigant = await Litigant.create({
        fullName,
        profilePhoto: profilePhoto.url,
        email,
        password,
        mobile,
        address,

    })

    const createdlitigant = await Litigant.findById(litigant._id).select(
        "-password -refreshToken"
    )

    if (!createdlitigant) {
        throw new ApiError(500, "Something went wrong while Registering")
    }

    return res.status(201).json(
        new ApiResponse(201, createdlitigant, "Litigant created successfully")
    )
})


const loginInLitigant = asyncHandler(async (req, res) => {
    //email pass 
    // check if exists 
    //find user 
    //pass check 
    //access and refresh token
    //access entry
    //send cookie
    //response
    const { email, password } = req.body

    if (!email && !password) {
        throw new ApiError(400, "Email or password is required")
    }

    const litigant = await Litigant.findOne({
        $or: [{ email }, { password }]
    })

    if (!litigant) {
        throw new ApiError(404, "Litigant not found!!")
    }

    const isPasswordValid = await litigant.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(litigant._id)

    const loggedInLitigant = await Litigant.findById(litigant._id)
        .select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                litigant: loggedInLitigant,
                accessToken: accessToken,
                refreshToken: refreshToken
            },
                "Litigant Logged in Succesfully")
        )


})


const logoutLitigant = asyncHandler(async (req, res) => {
    //clear cookie
    //clear refresh token
    await Litigant.findByIdAndUpdate(
        req.litigant._id,
        {
            $set:
            {
                refreshToken: undefined

            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "Litigant Logged out"))

})



const refreshAccessToken = asyncHandler(async (req, res) => {
    try {
        const incomingRefreshToken = req.cokkies.refreshToken || req.body.refreshToken

        if (incomingRefreshToken) {
            throw new ApiError(401, "Unauthorized request !")

        }
        const decodeToken = jwt.verify(incomingRefreshToken, process.env.ACCESS_TOKEN_SECRET)
        const litigant = await Litigant.findById(decodeToken?._id)
        if (!litigant) {
            throw new ApiError(401, "Invalid Token")
        }

        if (incomingRefreshToken !== litigant?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const { accessToken, newrefreshToken } = await generateAccessAndRefreshTokens(litigant._id)

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newrefreshToken, options)
            .json(

                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newrefreshToken },
                    "Acess Token refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token ")
    }
})

export { registerLitigant, loginInLitigant, logoutLitigant, refreshAccessToken }