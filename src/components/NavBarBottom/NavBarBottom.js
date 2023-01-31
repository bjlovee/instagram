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
  // console.log(user)
  return (
    <div
      onClick={(e) => {
        e.preventDefault()
        navigate('/')
      }} className={styles.navBarBottom}
    >

      <div className={styles.homeButton}>
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

      <nav>
        <Link to='/profile'>
          <div className={styles.profile}>
            <img src={user.profilePic} />
          </div>
        </Link>
      </nav>
      {/* <a href='/profile'>h</a> */}
      {/* <IconButton><SendIcon /></IconButton> */}
    </div>
  )
}

{ /* <div className={styles.profile}>
                <img onClick={()=>{
                    navigate('/profile')
                    // console.log('click')
                }}

                src={user.profilePic}/>
            </div> */ }
