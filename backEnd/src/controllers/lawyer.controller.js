import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js"
import { Lawyer } from "../models/lawyer.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";



const generateAccessAndRefreshTokens = async (lawyerId) => {

    try {
        const lawyer = await Lawyer.findById(lawyerId)
        const accessToken = lawyer.generateAccessToken()
        const refreshToken = lawyer.generateRefreshToken()

        lawyer.refreshToken = refreshToken
        await lawyer.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    }
    catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}


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
        throw new ApiError(409, "Lawyer with Email or full Name already exists")
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
        new ApiResponse(201, createdlawyer, "Lawyer created successfully")
    )
})


const loginInLawyer = asyncHandler(async (req, res) => {
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

    const lawyer = await Lawyer.findOne({
        $or: [{ email }, { password }]
    })

    if (!lawyer) {
        throw new ApiError(404, "Lawyer not found!!")
    }

    const isPasswordValid = await lawyer.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(lawyer._id)

    const loggedInLawyer = await Lawyer.findById(lawyer._id)
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
                lawyer: loggedInLawyer,
                accessToken: accessToken,
                refreshToken: refreshToken
            },
                "Lawyer Logged in Succesfully")
        )


})



const logOutLawyer = asyncHandler(async (req, res) => {
    //clear cookie
    //clear refresh token
    await Lawyer.findByIdAndUpdate(
        req.lawyer._id,
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
        .json(new ApiResponse(200, {}, "Lawyer Logged out"))

})


const verifyLawyer = asyncHandler(async (req, res) => {
    const { lawyerId } = req.body;
    try {
        const lawyer = await Lawyer.findById(lawyerId);
        if (!lawyer) {
            return res.status(404).json(new ApiResponse(404, {}, "Lawyer not found"))
        }
        await Lawyer.findByIdAndUpdate(
            lawyerId,
            { isProfileVerified: true },
            { new: true }
        )
        return res.status(200).json(new ApiResponse(200, {}, "Lawyer verified"))

    }
    catch (err) {
        return res.status(500).json(new ApiResponse(500, {}, "Internal server error"))
    }
});

const revokeLawyer = asyncHandler(async (req, res) => {
    const { lawyerId } = req.body;
    try {
        const lawyer = await Lawyer.findById(lawyerId);
        if (!lawyer) {
            return res.status(404).json(new ApiResponse(404, {}, "Lawyer not found"));
        }

        await Lawyer.findByIdAndUpdate(
            lawyerId,
            { isProfileVerified: false },
            { new: true }
        );

        return res.status(200).json(new ApiResponse(200, {}, "Lawyer verification revoked"));

    } catch (err) {
        return res.status(500).json(new ApiResponse(500, {}, "Internal server error"));
    }
});


const getAllLawyers = asyncHandler(async (req, res) => {
    try {
        const lawyers = await Lawyer.find(); // Retrieves all lawyers
        if (!lawyers || lawyers.length === 0) {
            return res.status(404).json(new ApiResponse(404, [], "No lawyers found"));
        }
        return res.status(200).json(new ApiResponse(200, lawyers, "Lawyers retrieved successfully"));
    } catch (err) {
        return res.status(500).json(new ApiResponse(500, {}, "Internal server error"));
    }
});



export { registerLawyer, loginInLawyer, logOutLawyer, verifyLawyer, getAllLawyers, revokeLawyer }