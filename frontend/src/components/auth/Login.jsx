import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './auth.css'
import logo from '../../assets/github-mark-white.svg'
import { useAuth } from '../../authContext.jsx'
import { Link } from 'react-router-dom'

export default function Login() {

  
  // useEffect(() => {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('userId')
  //   setCurrentUser(null)
  // }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {  setCurrentUser } = useAuth()


  const handlelogin = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);
      const res = await axios.post("vlogin", {
        email: email,
        password: password,
      });


      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);

      setCurrentUser(res.data.userId);
      setLoading(false);

      window.location.href = '/'


    } catch (error) {
      console.error('login error', error.message);
      alert("Login Failed!")
      setLoading(false)
    }

}


  return (
    <div className='main'>

      <div className="gitLogo">
        <img src={logo} alt="" />
        <h2>Log In</h2>
      </div>

      <div className="signupBox">

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            id='email' />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            id='password' />
        </div>

        <button
          onClick={handlelogin} disabled={loading}>{loading ? "Loading..." : "Login"}</button>
      </div>

      <div className="loginBox">
        <p>New to GitHub? <Link to="/signup">Create an account</Link></p>

      </div>
    </div>
  )
}
