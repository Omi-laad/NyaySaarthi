import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js"
import { Lawyer } from "../models/lawyer.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import { upload } from "../middlewares/multer.middlerware.js";


const registerLawyer = asyncHandler(async (req, res) => {

    //get user details
    //Validation - not empty
    //check if user note empty
    //check for images ,check for avtar
    //upload to cloudinary ,avtar
    //create user obj = create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return res
    const { fullName, email, password, mobile, courtPractices, barCodeNumber, officeAddress, typeOfLaw } = req.body
    if (
        [fullName, email, password, mobile, courtPractices, barCodeNumber, officeAddress, typeOfLaw].some((field) => field?.trim() === "")

    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await Lawyer.findOne({

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


    const lawyer = await Lawyer.create({
        fullName,
        profilePhoto: profilePhoto.url,
        email,
        password,
        mobile,
        barCodeNumber,
        courtPractices,
        officeAddress,
        typeOfLaw

    })

    const createdlawyer = await Lawyer.findById(lawyer._id).select(
        "-password -refreshToken"
    )

    if (!createdlawyer) {
        throw new ApiError(500, "Something went wrong while Registering")
    }

    return res.status(201).json(
        new ApiResponse(201, createdlawyer, "Litigant created successfully")
    )
})


export { registerLawyer }