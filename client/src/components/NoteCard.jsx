import { FaEdit, FaTrash } from "react-icons/fa";

const NoteCard = ({ note , onEdit, deleteNote}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.description}</p>
      <div className="flex justify-between mt-2">
        <button onClick={() => onEdit(note)} className="text-blue-500 mr-2 cursor-pointer">
          <FaEdit  />
        </button>
        <button onClick={() => deleteNote(note._id)} className="text-red-400 cursor-pointer">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
