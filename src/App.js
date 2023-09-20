import React from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'; 
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return <>
  <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   <BrowserRouter>
   <Routes>
   <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Register />}/>   
    
    </Routes>
    </BrowserRouter>
  
  
  
  </>; 
  
}

export default App