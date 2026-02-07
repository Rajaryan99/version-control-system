import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './profile.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "Username"
  })

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        try {

          const res = await axios.get(`http://localhost:3000/userProfile/${userId}`)
          console.log(res)
          setUserDetails(res.data)
          
        } catch (error) {
          console.error("Fetching user in frontend error", error)
        }
      }
    }

fetchUserDetails()
  }, [])



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
            <img src="\src\assets\profile.png" alt="" />
          </div>
          <h3>{ userDetails.username}</h3>

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
