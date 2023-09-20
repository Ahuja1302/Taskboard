import React, { useState } from 'react'
import { Link, useNavigate} from "react-router-dom";
import './Register.css';
import {ToastContainer, toast} from "react-toastify";

function Register() {
  const [username,setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate=useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();   
    if(username===""){
      toast.error("Name is required");
    }else if(email===""){
      toast.error("email is required");
    }else if(password===""){
      toast.error("password required");
    }else if(checked===""){
      toast.error(email)
    }
    else{
      localStorage.setItem('username',username)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      localStorage.setItem('terms',checked)
      toast.success("User Saved!")
      navigate('/login')
    }

    // // Implement your login logic here
    // if (email && password) {
    //   const userData = {
    //     username: username,
    //     email: email,
    //     password: password,
    //   };
    //   const userDataString = JSON.stringify(userData);
    //   localStorage.setItem('userData', userDataString);
  
    //   // Example: Send a request to your authentication server
    //   console.log('Username:', username)
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   // console.log('Remember Me:', rememberMe);
    } 
  
  return (
  
    <div className="Register-container">
      <h1>Sign up</h1>

      <div className="form-group">
          <fieldset >
          <legend>Username</legend>
          <input  
              type="username"
              id="username"
              name="username"
              placeholder='Enter Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
          </fieldset>
        </div>
     
        <div className="form-group">
          <fieldset >
          <legend>Email Address</legend>
          <input  
              type="email"
              id="email"
              name="email"
              placeholder='abc@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Password </legend>
            <input
              type="password"
              id="password"
              style={{color:"white"}}
              name="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>
        </div>
       <div style={{display: "flex", justifyContent: "space-between", width: "50vh"}}>
          <div>

          <input
            type="checkbox"
            id="checked"
            name="rememberMe"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="rememberMe">I accept the terms & conditions</label>
          </div>
        
        {/* <div>
          <a >Forgot Password?</a>
        </div> */}
       </div>
        
        <div className="form">
          <button type="button" onClick={handleRegister}>
            Sign Up
          </button>
        </div>
      
    </div>
  )
};

export default Register