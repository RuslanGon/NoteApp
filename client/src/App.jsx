import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Singup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
   <ToastContainer></ToastContainer>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
