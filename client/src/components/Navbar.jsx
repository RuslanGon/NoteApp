import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {};

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold mr-22">
        <Link to="/">NoteApp</Link>
      </div>
      <input
        className="bg-gray-600 px-4 py-2 rounded"
        type="text"
        placeholder="Search notes..."
      />
      <div>
        <span className="mr-4">user email</span>
        <Link className="bg-blue-500 px-4 py-2 rounded mr-4" to="/login">
          Login
        </Link>
        <Link className="bg-emerald-500 px-4 py-2 rounded mr-4" to="/register">
          Sing Up
        </Link>
        <button onClick={handleLogout} className="bg-red-400 px-4 py-2 rounded cursor-pointer">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
