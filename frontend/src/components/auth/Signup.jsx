import React, { useState } from 'react'
import axios from 'axios'
import './auth.css'
import logo from '../../assets/github-mark-white.svg'
import {useAuth} from '../../authContext.jsx'

export default function Signup() {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      const res = await axios.post("http://localhost:3000/signup", {
        email: email,
        password: password,
        username: username
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);

      setCurrentUser(res.data.userId);
      setLoading(false);

      window.location.herf = '/'
      
    } catch (error) {
      console.error('Signup error', error.message)
    }
  }

  return (
    <div className='main'>

      <div className="gitLogo"> 
        <img src={logo} alt="" />
        <h2>Sign Up</h2>
      </div>

      <div className="signupBox">
        <div>
        <label htmlFor="username">Username</label>
          <input type="text" placeholder='Enter Username' id='username' />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Enter email' id='email' />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter password' id='password' />
        </div>

        <button onClick={handleSignup}>Signup</button>
      </div>

      <div className="loginBox">
        <p>Already have an account? <a href="/login">Sign in</a></p>

      </div>
    </div>
  )
}
