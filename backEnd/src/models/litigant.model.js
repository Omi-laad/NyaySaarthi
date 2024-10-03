import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const litigantSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true

        },
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
            type: String, unique: true, // Ensures email is unique across all users
            validate: {
                validator: function (v) {
                    // Basic email regex validation
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            },
            required: [true, 'User email required'],
        },
        isEmailVerified: {
            type: Boolean,
            default: false, // Initially false until lawyer verifies email
        },
        password: { type: String, required: true }, // Encrypted password
        refreshToken: {
            type: String,

        },
        address: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zipCode: { type: String }
        },
        profilePhoto: {
            type: String,
            required: true
        }, // URL or image path for profile photo Cloudinary
    }, { timestamps: true });

litigantSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

litigantSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


litigantSchema.methods.generateAccessToken = function () {
    jwt.sign({
        _id: this._id,
        email: this.email,
        fullName: this.fullName,
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },

    )
}

litigantSchema.methods.generateRefreshToken = function () {

    jwt.sign({
        _id: this._id,
        email: this.email,
        fullName: this.fullName,
    },
        process.env.REFRESH_TOKEN,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },

    )
}


export const Litigant = mongoose.model("Litigant", litigantSchema)