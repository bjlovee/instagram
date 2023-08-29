import React from 'react'
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ExploreIcon from '@mui/icons-material/Explore'
import SendIcon from '@mui/icons-material/Send'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import styles from '../NavBar/NavBar.module.scss'

export default function NavBar () {
  return (
    <div className={styles.navBar}>
      <IconButton><InstagramIcon /></IconButton>
      <IconButton><HomeIcon /></IconButton>
      <IconButton><SearchIcon /></IconButton>
      <IconButton><ExploreIcon /></IconButton>
      <IconButton><SendIcon /></IconButton>
      <IconButton><FavoriteBorderIcon /></IconButton>
      <IconButton><ControlPointIcon /></IconButton>
    </div>
  )
}
