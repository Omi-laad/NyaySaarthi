const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, reconfirmpassword, role, phone } = req.body;

        // Check if password and reconfirmpassword match
        if (password !== reconfirmpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            password: hashedPassword,
            role,
            email,
            phone
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({ message: `User registered successfully as a ${role}`, user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { id: user._id, role: user.role }, process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.status(200).json(`token: ${token}`)


    }
    catch (err) {
        res.status(500).json({ message: "Error logging in user", error: err.message })
    }
};

module.exports = {
    register,
    login
}