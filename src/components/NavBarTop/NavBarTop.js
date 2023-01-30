import React from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from '../NavBarTop/NavBarTop.module.scss'
import { useNavigate } from 'react-router-dom'

export default function NavBarBottom() {

    const navigate = useNavigate()

    return (
        <div className={styles.navBar}>
            {/* <div> */}
            <div className={styles.logo}><h3
              onClick={()=>{
                navigate('/home')
              }}
            >Instafake</h3></div>
            <IconButton><SearchOutlined className={styles.search}/></IconButton>
            {/* </div> */}
            <IconButton><FavoriteBorderIcon /></IconButton>
        </div>
    );
}