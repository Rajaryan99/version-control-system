import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/github-mark-white.svg'


export default function Navbar() {
    return (
        <nav>
            <Link to='/'>
                <div className='logo'>

                    <img src={logo} alt="Github Logo" />
                    <h2>Github</h2>
                </div>
            </Link>
            <div className='profile'>
                <div className='AIicons'>
                    <a href=""><i class="fa-brands fa-openai" style={{fontSize:"18px"}}></i> OpenAI</a>
                </div>
                <div className='create'>
                    <Link to='/create'>
                        <p><i class="fa-regular fa-folder" ></i> Create a Repository</p>
                    </Link>
                </div>
                <div className='pro'>
                    <Link to='/profile'>
                        <p> <i class="fa-regular fa-user"></i> Profile</p>
                    </Link>
                </div>

            </div>


        </nav>
    )
}
