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

router.get('/', async (req, res) => {
    try {
      const notes = await NoteModel.find();
      return res.status(200).json({ notes }); 
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server error while fetching notes' }); 
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedNote = await NoteModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
      
      res.status(200).json({ message: 'Note updated', note: updatedNote });
    } catch (error) {
      console.error('Error updating note:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

export default router;
