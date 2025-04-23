import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NoteModel = ({closeModal}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  
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
      setSuccessMessage("Note added! Redirecting...");
      setTimeout(() => navigate("/"), 1500); 
      closeModal()
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Add New Note
        </h2>
        <form onClick={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-1"
            >
              Title:
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              id="title"
              placeholder="Note title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-1"
            >
              Description:
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              rows="4"
              placeholder="Note description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Add Note
            </button>
          </div>
          <button
          onClick={closeModal}
            className="bg-red-400 hover:bg-red-700 text-black py-2 px-4  rounded-lg transition duration-300 cursor-pointer"
          >
            Cancel
          </button>
          {successMessage && (
            <p className="text-green-600 text-center">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NoteModel;
