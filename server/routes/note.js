import express from 'express';
import NoteModel from '../models/Note.js';
import middleware from '../middleware/middleware.js';

const router = express.Router();

router.post('/add', middleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = await NoteModel.create({
      title,
      description,
      userId: req.user.id,
    });

    res.status(201).json({
      message: 'Note created successfully',
      note: newNote,
    });
  } catch (error) {
    console.error('Note creation error:', error);
    res.status(500).json({ message: 'Server error during note creation' });
  }
});

export default router;
