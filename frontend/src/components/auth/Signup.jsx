import React from 'react'
import axios from 'axios'
import './auth.css'
import logo from '../../assets/github-mark-white.svg'

export default function Signup() {
  return (
    <div className='main'>
      <div className="gitLogo"> 
      </div>
      <div className="signupBox">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='Enter Username' id='username' />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Enter email' id='email' />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter password' id='password' />
        <button>Signup</button>
      </div>
      <div className="loginBox"></div>
      
    </div>
  )
}
