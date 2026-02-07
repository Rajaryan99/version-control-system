import React from 'react'
import Navbar from '../navbar/Navbar'
import './profile.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';

export default function Profile() {
  return (
    <>
      <Navbar/>
    <div className='profilepage'>

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

        
      </div>
    </>
  )
}
