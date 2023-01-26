import React from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from '../NavBarTop/NavBarTop.module.scss'

export default function NavBarBottom() {
    return (
        <div className={styles.navBar}>
            {/* <div> */}
            <div className={styles.logo}><h3>Instafake</h3></div>
            <IconButton><SearchOutlined className={styles.search}/></IconButton>
            {/* </div> */}
            <IconButton><FavoriteBorderIcon /></IconButton>
        </div>
    );
}