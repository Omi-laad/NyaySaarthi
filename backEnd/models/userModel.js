const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'lawyer', 'litigant'],
    },
    phone: {
        type: String,
        required: true,
        validate: {
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
        type: String,
        required: true,
        unique: true, // Ensures email is unique across all users
        validate: {
            validator: function (v) {
                // Basic email regex validation
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'User email required'],
    },
},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;