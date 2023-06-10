const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(401).json({ message:"Invalid email or password" });
    }

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message:"Invalid email or password" });
    }
    // create a JWT token
    const secret = process.env.userLocalSecret;
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
    return res.status(200).json({ message: "Logged in successfully", token });
});
  

module.exports = router;