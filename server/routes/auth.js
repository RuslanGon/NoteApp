import express from 'express'
import UsertModel from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import middleware from '../middleware/middleware.js'

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

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Проверяем наличие пользователя
    const user = await UsertModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Проверяем пароль
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Генерируем токен
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

router.get('/verify', middleware, async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.error("Verification failed:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
});

export default router