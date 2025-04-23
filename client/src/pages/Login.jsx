import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState('')  

  const [password, setPassword] = useState('') 
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {email, password})
    console.log('Login success:', response.data)
    setSuccessMessage('Login successful! Logining...');
    localStorage.setItem('token', response.data.token)
    setTimeout(() => navigate('/'), 1500)
  } catch (error) {
    console.log(error);
  }
  }  

    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div
          className="bg-white p-8 rounded-xl shadow-lg"
          style={{ width: "400px" }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
               onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Password
              </label>
              <input
               onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="*****"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition duration-300"
              >
                Login
              </button>
            </div>
            <p className="flex justify-center items-center mt-4">
            Don't have account?{" "}
            <Link className="ml-4" to="/register">
              Sing Up
            </Link>{" "}
          </p>
          {successMessage && (
            <p className="text-green-600 text-center">{successMessage}</p>
          )}
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  