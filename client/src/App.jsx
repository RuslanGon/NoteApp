import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Singup.jsx';
import Login from './pages/Login.jsx';


function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
