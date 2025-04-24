import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import NoteModel from '../components/NoteModel.jsx'
import axios from 'axios'
import NoteCard from '../components/NoteCard.jsx';
// import { useNavigate } from 'react-router-dom'

const Home = () => {
  // const navigate = useNavigate()
  const [isModel, setIsModel] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note");
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsModel(false);
  };

  const addNote = async (title, description) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Note added successfully:", response.data);
      // setTimeout(() => navigate("/"), 1500);
      fetchNote()
      closeModal();
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
     <div className='px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
      {notes.map(note =>(
        <NoteCard note={note} />
      ))}
     </div>
      <button
        onClick={() => setIsModel(true)}
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full"
      >
        +
      </button>
      {isModel && <NoteModel closeModal={closeModal} addNote={addNote} />}
    </div>
  );
};

export default Home;