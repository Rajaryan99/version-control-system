import React from 'react'
import Navbar from '../navbar/Navbar'
import './profile.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';

export default function Profile() {
  return (
    <>
     
      <div className='profilepage'>
        <Navbar />

        <div className="header">
          <div>
            <MenuBookIcon />
            <p>Overview</p>
          </div>
          <div>
            <StarIcon/>
            <p>Stared Repository</p>
          </div>
        </div>

        <div className='profileDetails'>
          <div className='imgDiv'>
            <img src="" alt="" />
          </div>
          <h3>UserName</h3>

          <button className='followbtn'>Follow</button>

          <div className='fam'>
            <p>10 Followers</p>
            <p>3 Following</p>
          </div>


        </div>
      </div>
    </>
  )
}
