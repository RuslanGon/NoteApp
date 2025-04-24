import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contex/ContexProvider.jsx";

const Navbar = ({setQuery}) => {

const {user, handleLogout} = useAuth()


  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold mr-22">
        <Link to="/">NoteApp</Link>
      </div>
      <input
      onChange={e => setQuery(e.target.value)}
        className="bg-gray-600 px-4 py-2 rounded ml-4"
        type="text"
        placeholder="Search notes..."
      />
      <div className="flex items-center">
        {!user ? (
          <>
            <Link className="bg-blue-500 px-4 py-2 rounded mr-4" to="/login">
              Login
            </Link>
            <Link className="bg-emerald-500 px-4 py-2 rounded mr-4" to="/register">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="mr-4">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-400 px-4 py-2 rounded cursor-pointer"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
