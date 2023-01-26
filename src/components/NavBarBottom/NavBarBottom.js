import React from 'react'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import styles from '../NavBarBottom/NavBarBottom.module.scss'

export default function NavBarBottom() {
    return (
        <div className={styles.navBarBottom}>
            <IconButton><HomeIcon /></IconButton>
            <IconButton><ExploreIcon /></IconButton>
            <IconButton><MovieIcon /></IconButton>
            <IconButton><ControlPointIcon /></IconButton>
            <IconButton><SendIcon /></IconButton>
        </div>
    );
}