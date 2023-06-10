const express = require('express');
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const router = express.Router();

router.post('/register', async (req, res) => {
    const { displayName, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        return res.status(401).json({ message: "Email already exist!" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email: email,
        password: hashPassword,
        displayName: displayName,
      });
    await newUser.save();
    return res.status(200).json({ message: "User created successfully"});
});

module.exports = router;