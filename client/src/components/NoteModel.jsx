import React, { useState } from "react";

const NoteModel = ({closeModal, addNote}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addNote(title, description)
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
        </form>
      </div>
    </div>
  );
};

export default NoteModel;
