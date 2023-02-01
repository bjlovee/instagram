import React from 'react'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import MovieIcon from '@mui/icons-material/Movie'
import SendIcon from '@mui/icons-material/Send'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import styles from '../NavBarBottom/NavBarBottom.module.scss'
// import { trusted } from 'mongoose';
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import { logOut } from '../../utilities/users-service'

export default function NavBarBottom ({
  showModal,
  setShowModal,
  user,
  setUser,
  setAddImageForm,
  showLogOut,
  setShowLogOut
}) {
  const navigate = useNavigate()

  function handleLogout () {
    logOut()
    setUser(null)
    navigate('/')
  }


  return (
    <>
      <div className={styles.navBarBottom}>
        <div onClick={(e) => {
            e.preventDefault()
            navigate('/')
            }} className={styles.homeButton}>
          <IconButton className={styles.icon}><HomeIcon /></IconButton>
        </div>
              <IconButton className={styles.icon}><ExploreIcon /></IconButton>
              <IconButton className={styles.icon}><MovieIcon /></IconButton>
            <div onClick={(e) => {
                e.preventDefault()
                setShowModal(true)
              }}
              >
                <IconButton className={styles.icon}><ControlPointIcon /></IconButton>
            </div>

            <div onClick={(e) => {
                  setShowLogOut(true)
                }} className={styles.profile}>
              <img src={user.profilePic} />
            </div>
      </div>
        {showLogOut
          ?
            <div className={styles.logout}>
              <div onClick={handleLogout}  className={styles.logoutClicker}>Logout</div>

              <div onClick={(e)=>{
                e.preventDefault()
                setAddImageForm(true)
                setShowModal(true)
                setShowLogOut(false)
              }}className={styles.editProfileClicker}>Edit Profile</div>

              <div onClick={(e)=>{
                  e.preventDefault()
                  navigate('/profile')
                  setShowLogOut(false)
              }}className={styles.editProfileClicker}>Profile Page</div>
            </div>
          :
            ''
        }
    </>
  )
}
