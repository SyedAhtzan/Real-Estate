import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    
    // Check if the password is provided
    if (!password) {
        return res.status(400).json({ error: "Password is required" });
    }
    
    try {
        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json('User created successfully!');
    } catch (error) {
        // Pass the error to the error handler
        next(error);
    }
};
