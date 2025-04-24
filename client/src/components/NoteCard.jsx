import { FaEdit, FaTrash } from "react-icons/fa";

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.description}</p>
      <div className="flex justify-between mt-2">
        <button className="text-blue-500 mr-2 cursor-pointer">
          <FaEdit />
        </button>
        <button className="text-red-400 cursor-pointer">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
