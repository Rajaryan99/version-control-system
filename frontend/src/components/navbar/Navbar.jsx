import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
      <nav>
          <Link to='/'>
          <div>
              
              <img src="https://github.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo" />
              <h2>Github</h2>
          </div>
          </Link>
          <div>
              <Link to='/create'>
                  <p>Create a Repository</p>
              </Link>
              <Link to='/profile'>
                  <p>Profile</p>
              </Link>

          </div>
    </nav>
  )
}
