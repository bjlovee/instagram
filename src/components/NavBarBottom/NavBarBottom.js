import React from 'react'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import styles from '../NavBarBottom/NavBarBottom.module.scss'
import { trusted } from 'mongoose';

export default function NavBarBottom({
    showModal,
    setShowModal,
    user
}) {

// const handleShowModal = (e) => {
//     e.preventDefault()
//     setShowModal(true)
console.log(user)
// }
    return (
        <div className={styles.navBarBottom}>
            <IconButton><HomeIcon /></IconButton>
            <IconButton><ExploreIcon /></IconButton>
            <IconButton><MovieIcon /></IconButton>
            <div onClick={(e)=>{
                e.preventDefault()
                setShowModal(true)
            }}>
            <IconButton><ControlPointIcon/></IconButton>
            </div>
            <IconButton><SendIcon /></IconButton>
        </div>
    );
}