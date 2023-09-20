import React, { useState } from 'react';
import {toast} from "react-toastify";
import './Login.css'; // Import the CSS file
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate=useNavigate();
  const username=localStorage.getItem('email')?localStorage.getItem('email'):'abc@gmail.com'
  const userpassword=localStorage.getItem('password')?localStorage.getItem('password'):'admin'
  const handleLogin = () => {
    // Implement your login logic here
    // if (email && password) {
    //   // Example: Send a request to your authentication server
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   console.log('Remember Me:', rememberMe);
    // }

    if(email===username && password===userpassword){
      toast.success("login Suceess");
      navigate('/home');
    }else{
     toast.error("Invalid email and password!")  
    }
  };

  return (
    <div className="login-container">
      <h1>Log in!</h1>
     
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
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
          </div>
        
        <div>
          <a >Forgot Password?</a>
        </div>
       </div>
        
        <div className="form">
          <button type="button" onClick={handleLogin}>
            Log in
          </button>
        </div>
      
    </div>
  );
}

export default Login;
