const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const router = express.Router();

router.get("/user", async (req, res) => {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ message: 'Missing authorization token' });
      }

      try {
        // Verify the JWT and extract the payload
        const secret = process.env.userLocalSecret;
        const payload= jwt.verify(token, secret);
        const userId = payload.userId;

        const user = await User.findById(userId);
 
        // You can use the user ID to fetch the user's data or perform other actions
        // For simplicity, we'll just send back a success message
        res.status(200).json({ authenticated: true, user});
      } catch (error) {
        res.status(401).json({ authenticated: false, message: 'Invalid authorization token' });
      }
    }
  );


export default router;
