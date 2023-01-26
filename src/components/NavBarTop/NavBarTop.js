import React from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from '../NavBarBottom/NavBarBottom.module.scss'

export default function NavBarBottom() {
    return (
        <div className={styles.navBarBottom}>
            <SearchOutlined />
            <IconButton><FavoriteBorderIcon /></IconButton>
        </div>
    );
}