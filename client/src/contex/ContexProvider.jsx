import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

 const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
  };
  

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get("http://localhost:5000/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (res.data.success) {
          setUser(res.data.user); 
        } else {
          setUser(null); 
        }
      } catch (error) {
        console.log(error); 
        setUser(null); 
      }
    };
    verifyUser(); 
  }, []); 


  return (
    <authContext.Provider value={{ user, login, handleLogout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext)

export default ContextProvider;
