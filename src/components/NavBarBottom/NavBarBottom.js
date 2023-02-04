import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import MovieIcon from '@mui/icons-material/Movie'
import SendIcon from '@mui/icons-material/Send'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import styles from '../NavBarBottom/NavBarBottom.module.scss'
// import { trusted } from 'mongoose';
import { useNavigate, Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

import { logOut } from '../../utilities/users-service'

export default function NavBarBottom ({
  showModal,
  setShowModal,
  user,
  setUser,
  setAddImageForm,
  showLogOut,
  setShowLogOut,
  setProfileUser,
  getPosts
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
        <div
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }} className={styles.homeButton}
        >
          <IconButton className={styles.icon}><HomeIcon sx={{ color: 'black' }} /></IconButton>
        </div>
        <IconButton className={styles.icon}><ExploreIcon sx={{ color: 'black' }} /></IconButton>
        <IconButton className={styles.icon}><MovieIcon sx={{ color: 'black' }} /></IconButton>
        <div onClick={(e) => {
          e.preventDefault()
          setShowModal(true)
        }}
        >
          <IconButton className={styles.icon}><ControlPointIcon sx={{ color: 'black' }} /></IconButton>
        </div>

        <div
          onClick={(e) => {
            setShowLogOut(true)
          }} className={styles.profile}
        >
          {user.profilePic

            ? <img src={user.profilePic} />
            : <Avatar sx={{ width: '100%', height: '100%' }} />}
        </div>
      </div>
      {showLogOut
        ? <div className={styles.logout}>
          <div className={styles.closeContainer}>
            <div
              onClick={(e) => {
                console.log('click')
                e.preventDefault()
                setShowLogOut(false)
              }} className={styles.closeButton}
            >X
            </div>
          </div>

          <div
            onClick={() => {
              handleLogout()
              setShowLogOut(false)
            }} className={styles.logoutClicker}
          >Logout
          </div>

          <div
            onClick={(e) => {
              e.preventDefault()
              setAddImageForm(true)
              setShowModal(true)
              setShowLogOut(false)
            }} className={styles.editProfileClicker}
          >Edit Profile
          </div>

          <div
            onClick={(e) => {
              e.preventDefault()
              setProfileUser(user)
              getPosts(user._id)
              navigate('/profile')
              setShowLogOut(false)
            }} className={styles.editProfileClicker}
          >Profile Page
          </div>
        </div>
        : ''}
    </>
  )
}
