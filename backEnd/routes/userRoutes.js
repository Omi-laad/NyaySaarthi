const express = require('express');
const verifyToken = require("../middlewares/authMiddleware")
const router = express.Router();
const authorizeRoles = require("../middlewares/roleMiddleware")


//FOR admin only
router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "welcome admin" })
});

//FOR Admin and Lawyer
router.get('/lawyer', verifyToken, authorizeRoles("admin", "lawyer"), (req, res) => {
    res.json({ message: "welcome lawyer" })
});


//For Admin and Lawyer and Author
router.get('/author', verifyToken, authorizeRoles("admin", "lawyer", "author"), (req, res) => {
    res.json({ message: "welcome author" })
});

//For Everyone
router.get('/litigant', verifyToken, authorizeRoles("admin", "lawyer", "litigant"), (req, res) => {
    res.json({ message: "welcome litigant" })
});


module.exports = router;