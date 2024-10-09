// import asyncHandler from '../utils/asyncHandler.js';
// import Admin from '../models/admin.model.js';
// import { ApiResponse } from '../utils/ApiResponse.js';
// import ApiError from '../utils/ApiError.js';


// const generateAccessAndRefreshTokens = async (adminId) => {

//     try {
//         const admin = await Admin.findById(adminId)
//         const accessToken = admin.generateAccessToken()
//         const refreshToken = admin.generateRefreshToken()

//         admin.refreshToken = refreshToken
//         await admin.save({ validateBeforeSave: false })

//         return { accessToken, refreshToken }

//     }
//     catch (error) {
//         throw new ApiError(500, "Something went wrong while generating refresh and access token")
//     }
// }

// // Create a new admin
// export const createAdmin = asyncHandler(async (req, res) => {
//     const { username, password, email } = req.body;
//     if (
//         [username, email, password].some((field) => field?.trim() === "")
//     ) {
//         throw new ApiError(400, "All fields are required")
//     }
//     const existedAdmin = await Admin.findOne({
//         $or: [{ username }, { email }]
//     })
//     if (existedAdmin) {
//         throw new ApiError(400, "Admin with this username or email already exists")
//     }
//     const admin = await Admin.create({ username, password, email });
//     const createdAdmin = await Admin.findById(admin._id).select(
//         "-password -refreshToken"
//     )
//     if (!createdAdmin) {
//         throw new ApiError(500, "Something went wrong")
//     }

//     return res.status(201).json(new ApiResponse(201, createdAdmin, 'Admin created successfully'));
// });

// //Login Admin
// export const loginAdmin = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const admin = await Admin.findOne({
//         $or: [{ email }, { password }]
//     })
//     if (!admin) {
//         return res.status(404).json(new ApiError(404, 'Admin not found'));
//     }
//     const isMatch = await admin.isPasswordCorrect(password);
//     if (!isMatch) {
//         return res.status(401).json(new ApiError(401, 'Invalid email or password'));
//     }
//     const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(admin._id)
//     const loggedInAdmin = await Admin.findById(admin._id)
//         .select("-password - refreshToken")
//     const options = {
//         httpOnly: true,
//         secure: true
//     }
//     return res.status(200)
//         .cookie("accessToken", accessToken, options)
//         .cookie("refreshToken", refreshToken, options)
//         .json(
//             new ApiResponse(200, {
//                 admin: loggedInAdmin,
//                 accessToken: accessToken,
//                 refreshToken: refreshToken
//             },
//                 'Admin logged in successfully'
//             )
//         )
// });





// // Get all admins
// export const getAllAdmins = asyncHandler(async (req, res) => {
//     const admins = await Admin.find({});
//     return res.status(200).json(new ApiResponse(200, admins, 'Admins fetched successfully'));
// });

// // Get admin by ID
// export const getAdminById = asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     const admin = await Admin.findById(id);
//     if (!admin) {
//         throw new ApiError(404, 'Admin not found');
//     }
//     return res.status(200).json(new ApiResponse(200, admin, 'Admin fetched successfully'));
// });

// // Update admin
// export const updateAdmin = asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     const admin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
//     if (!admin) {
//         throw new ApiError(404, 'Admin not found');
//     }
//     return res.status(200).json(new ApiResponse(200, admin, 'Admin updated successfully'));
// });

// // Delete admin
// export const deleteAdmin = asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     const admin = await Admin.findByIdAndDelete(id);
//     if (!admin) {
//         throw new ApiError(404, 'Admin not found');
//     }
//     return res.status(200).json(new ApiResponse(200, {}, 'Admin deleted successfully'));
// });



import asyncHandler from '../utils/asyncHandler.js';
import Admin from '../models/admin.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';

// Helper function to generate access and refresh tokens
const generateAccessAndRefreshTokens = async (adminId) => {
    try {
        const admin = await Admin.findById(adminId);
        const accessToken = admin.generateAccessToken();
        const refreshToken = admin.generateRefreshToken();

        admin.refreshToken = refreshToken;
        await admin.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
};

// Create a new admin
export const createAdmin = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;

    if ([username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const existedAdmin = await Admin.findOne({
        $or: [{ username }, { email }]
    });

    if (existedAdmin) {
        throw new ApiError(400, "Admin with this username or email already exists");
    }

    const admin = await Admin.create({ username, password, email });
    const createdAdmin = await Admin.findById(admin._id).select("-password -refreshToken");

    if (!createdAdmin) {
        throw new ApiError(500, "Something went wrong");
    }

    return res.status(201).json(new ApiResponse(201, createdAdmin, 'Admin created successfully'));
});

// Login Admin
export const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Corrected query to find the admin by email and password
    const admin = await Admin.findOne({ email });

    if (!admin) {
        return res.status(404).json(new ApiError(404, 'Admin not found'));
    }

    const isMatch = await admin.isPasswordCorrect(password);

    if (!isMatch) {
        return res.status(401).json(new ApiError(401, 'Invalid email or password'));
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(admin._id);

    const loggedInAdmin = await Admin.findById(admin._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Make secure only in production
        sameSite: 'Strict', // Add sameSite attribute for better security
    };

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options) // Corrected typo: "cokkie" to "cookie"
        .json(
            new ApiResponse(200, {
                admin: loggedInAdmin,
                accessToken: accessToken,
                refreshToken: refreshToken
            },
                'Admin logged in successfully'
            )
        );
});

// Get all admins
export const getAllAdmins = asyncHandler(async (req, res) => {
    const admins = await Admin.find({});
    return res.status(200).json(new ApiResponse(200, admins, 'Admins fetched successfully'));
});

// Get admin by ID
export const getAdminById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const admin = await Admin.findById(id);
    if (!admin) {
        throw new ApiError(404, 'Admin not found');
    }
    return res.status(200).json(new ApiResponse(200, admin, 'Admin fetched successfully'));
});

// Update admin
export const updateAdmin = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const admin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
    if (!admin) {
        throw new ApiError(404, 'Admin not found');
    }
    return res.status(200).json(new ApiResponse(200, admin, 'Admin updated successfully'));
});

// Delete admin
export const deleteAdmin = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
        throw new ApiError(404, 'Admin not found');
    }
    return res.status(200).json(new ApiResponse(200, {}, 'Admin deleted successfully'));
});



export const logoutAdmin = asyncHandler(async (req, res) => {
    // Clear admin's refresh token
    await Admin.findByIdAndUpdate(
        req.admin._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    );

    // Define cookie options
    const options = {
        httpOnly: true,   // Ensures the cookie is not accessible via JavaScript
        secure: true,     // Ensures the cookie is only sent over HTTPS
        sameSite: "None"  // To support cross-site cookie sharing (for APIs used in different domains)
    };

    // Clear cookies and send response
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "Admin logged out"));
});
