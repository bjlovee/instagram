import React from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from '../NavBarTop/NavBarTop.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
 
export default function NavBarBottom () {
  const navigate = useNavigate()

  const [showSearch, setShowSearch] = useState(false)
  // const [currentIconState, setCurrentIconState] = useState(false)

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logo}><h3
          onClick={() => {
            navigate('/')
          }}>Instafake</h3>
        </div>
        {showSearch
          ?
          <>
            <input onKeyDown={(e)=>{
              if(e.key == 'Enter'){
                console.log('search')
              } else if (e.key == 'Escape') {
                setShowSearch(false)
              }
            }}></input>
          </>
          :
          <>
            <IconButton onClick={()=>{
              // if(!showSearch){
                setShowSearch(true)
              // }
              // else{
              //   setShowSearch(false)
              // }
              
              }}><SearchOutlined className={styles.search} /></IconButton>
            
          </>
        }
        <IconButton><FavoriteBorderIcon /></IconButton>
      </div>
      {showSearch
        ?
          <div className={styles.searchProfileIndex}>
            <div className={styles.closeButtonWrapper}>
              <div onClick={()=>{
                setShowSearch(false)
              }}className={styles.closeButton}>X</div>
            </div>
          </div>
        :
        ''
      }
    </>
  )
}
