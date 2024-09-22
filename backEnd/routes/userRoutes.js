const express = require('express');
const verifyToken = require("../middlewares/authMiddleware")
const router = express.Router();

//FOR admin only
router.get('/admin', verifyToken, (req, res) => {
    res.json({ message: "welcome admin" })
});

//FOR Admin and Lawyer
router.get('/lawyer', verifyToken, (req, res) => {
    res.json({ message: "welcome lawyer" })
});

//For Everyone
router.get('/litigant', verifyToken, (req, res) => {
    res.json({ message: "welcome litigant" })
});


module.exports = router;