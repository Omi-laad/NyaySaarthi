import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// Define Lawyer schema
const lawyerSchema = new Schema({
    fullName: { type: String, required: true }, // Full name of the lawyer
    barCodeNumber: { type: String, required: true, unique: true },
    photo: { type: String }, // URL or image path
    mobile: {
        type: String, required: true, validate: {
            validator: function (v) {
                // Regex to validate phone numbers (e.g., 10 digits)
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        // Custom error message
        required: [true, 'User phone number required'],
    },
    email: {
        type: String, required: true, unique: true, // Ensures email is unique across all users
        validate: {
            validator: function (v) {
                // Basic email regex validation
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'User email required'],
    },
    password: { type: String, required: true }, // Encrypted password
    refreshToken: {
        type: String,

    },
    isEmailVerified: {
        type: Boolean,
        default: false, // Initially false until lawyer verifies email
    },
    otp: {   // Email verification by OTP
        type: String,
        default: null, // To store OTP temporarily for email verification
    },

    otpExpires: {
        type: Date,
        default: null, // To store OTP expiration time
    },
    courtPractices: {
        type: String, enum: ["Supreme Court", "High Court", "District Court", "Family Court", "Consumer Court", "Labour Court", "Tribunal",
        ], required: true
    }, // Court the lawyer practices in
    typeOfLaw: {
        type: [String], // Array of strings for different law types
        enum: ['Criminal', 'Corporate', 'Divorce', 'Civil', 'Tax', 'Others'],
        required: true
    },
    officeAddress: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String }
    },

    // Admin verification for profile
    isProfileVerified: {
        type: Boolean,
        default: false, // Initially false until admin verifies
    },


}, { timestamps: true });



lawyerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

lawyerSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


lawyerSchema.methods.generateAccessToken = function () {
    jwt.sign({
        _id: this._id,
        email: this.email,
        fullName: this.fullName,
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },

    )
}

lawyerSchema.methods.generateRefreshToken = function () {

    jwt.sign({
        _id: this._id,
        email: this.email,
        fullName: this.fullName,
    },
        process.env.REFRESH_TOKEN,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },

    )
}

// Create Lawyer model
export const Lawyer = mongoose.model("Lawyer", lawyerSchema)
