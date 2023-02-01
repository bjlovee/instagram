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

export default function NavBarBottom ({
  showModal,
  setShowModal,
  user
}) {
  const navigate = useNavigate()

  return (
    <div className={styles.navBarBottom}
    >
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
                e.preventDefault()
                navigate('/profile')
              }} className={styles.profile}>
            <img src={user.profilePic} />
          </div>
    </div>
  )
}
