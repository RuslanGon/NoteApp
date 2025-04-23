import express from 'express'
import UsertModel from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await UsertModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await UsertModel.create({
        name,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error during registration' });
    }
  });

export default router