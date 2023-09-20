import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className='navbar-img'>
          <img
              src={require('../img.jpeg')}
              alt="CodeBuild Logo"
              className="codebuild-logo"
            />
        </span>
        <h3 className="taskboard">TaskBoard</h3>
      </div>
      <div className='navbar-middle'>
        <p >Calculator</p>
        <a href='https://weather-app-mauve-zeta.vercel.app/' style={{fontSize: "1.2rem", textDecoration: "none"}}>Weather</a>
      </div>
      <div className="navbar-right">
        <span className='navbar-img navbar-img2'>
        <img
          src="https://picsum.photos/200/300" 
          alt="Profile"
          className="profile-image"
        />
        </span>
      </div>
    </div>
  );
}

export default Navbar;