import React from 'react'
import './UserLogin.css'

import pas_icon from "../Assets/pas.png"
import Rectangle_icon from"../Assets/Rectangle.png"
import BackGround_icon from "../Assets/BackGround.png"

export const UserLogin = () => {
  return (
    
    <div className='wrapper-1'>
    <div className="img">
      <img src={Rectangle_icon} alt="Rectangle icon" />
    </div>
    <div className="container">
      <div className="header">
        <div className="text">User Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={pas_icon} alt="Password icon" />
          <input type="text" placeholder="Your username" />
        </div>
        <div className="password">
          <input type="password" placeholder="******" />
        </div>
      </div>
      <button className="button">Sign Up</button>
      <div className="forget-password">Forget Password</div>
    </div>
  </div>
  );
}
export default UserLogin
