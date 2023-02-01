import React from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from '../NavBarTop/NavBarTop.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { StyledInputEndDecorator } from '@mui/joy/Input/Input'
import Avatar from "@mui/material/Avatar";
 
export default function NavBarBottom ({
  allUsers
}) {

  // console.log(allUsers)
  const navigate = useNavigate()

  const [showSearch, setShowSearch] = useState(false)
  // const [currentIconState, setCurrentIconState] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

console.log(searchTerm)
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
            <input type='search' onKeyDown={(e)=>{
              if(e.key == 'Enter'){
                console.log('search')
              } else if (e.key == 'Escape') {
                setShowSearch(false)
              }
            }} value={searchTerm} onChange={handleChange}/>
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
            {searchTerm
              ?
                <>
                  {
                    allUsers.filter(user => user.handle ? user.handle.toLowerCase().includes(searchTerm) : '')
                    .map((filteredUser) =>{
                      return (
                          <div className={styles.user}>
                            <div className={styles.profileImg}>
                              {
                                filteredUser.profilePic
                                  ?
                                    <img src={filteredUser.profilePic}/>
                                  :
                                    <div className={styles.defaultAvatar}>
                                      <Avatar sx={{width: '140%', height: '100%'}}/>
                                    </div>  
                                  //  <img src='https://thenounproject.com/api/private/icons/138354/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj2rBEjVf7QUBMfVmmvc-LVHhStKvcttEDipoPNcE1iXCN-wpL5DZrQUWq0VGpqKVaVJ0hqdlaJjq_jpTKB8LRxog02g%3D%3D'/>
                              }
                            </div>
                            <div className={styles.handle}>
                              <h5>{filteredUser.handle}</h5>
                            </div>
                          </div>
                      )
                    })
                  }
                </>
              :
                ''
            }
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
