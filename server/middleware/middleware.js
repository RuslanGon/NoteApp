import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

const middleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        successfully: false,
        message: 'No token provided or format is invalid',
      });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        successfully: false,
        message: 'User not found',
      });
    }
    const newUser = {name: user.name, id: user._id}
    req.user = newUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      successfully: false,
      message: 'Invalid or expired token',
    });
  }
};

export default middleware;
