import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from '../NavBarTop/NavBarTop.module.scss'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'

export default function NavBarBottom ({
  allUsers,
  setProfileUser,
  getPosts,

  setFollowingPresent,

  getUsers,
  setFollowersPresent,

}) {
  const navigate = useNavigate()

  const [showSearch, setShowSearch] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logo}><h3
          onClick={() => {
            navigate('/')
          }}
          >Instafake
        </h3>
        </div>
        {showSearch
          ? <>
            <input
              autofocus type='search' placeholder='click to search user' onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  console.log('search')
                } else if (e.key == 'Escape') {
                  setShowSearch(false)
                }
              }} value={searchTerm} onChange={handleChange}
            />
          </>
          : <div
              className={styles.searchContainer} onClick={(e) => {
                e.preventDefault()
                getUsers()
                setShowSearch(true)
              }}
            >
            <IconButton sx={{ padding: '0', borderRadius: '0.2px', display: 'flex', flexDirection: 'flex-start' }}><SearchOutlined className={styles.search} sx={{ margin: '0' }} /></IconButton>
            <p>Search...</p>
          </div>}
        <IconButton><FavoriteBorderIcon /></IconButton>
      </div>
      {showSearch
        ? <div className={styles.searchProfileIndex}>
          {searchTerm
            ? <>
              {
                    allUsers.filter(user => user.handle ? user.handle.toLowerCase().includes(searchTerm) : '')
                      .map((filteredUser) => {
                        return (
                          <div
                            className={styles.user} onClick={() => {
                              setProfileUser(filteredUser)
                              console.log('click')
                              setShowSearch(false)
                              getPosts(filteredUser._id)
                              setFollowingPresent(false)
                              setFollowersPresent(false)
                              navigate('/profile')
                            }}
                          >
                            <div className={styles.profileImg}>
                              {
                                filteredUser.profilePic
                                  ? <img src={filteredUser.profilePic} />
                                  : <div className={styles.defaultAvatar}>
                                    <Avatar sx={{ width: '140%', height: '100%' }} />
                                  </div>
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
            : ''}
          <div className={styles.closeButtonWrapper}>
            <div
              onClick={() => {
                setShowSearch(false)
              }} className={styles.closeButton}
            >X
            </div>
          </div>
        </div>
        : ''}
    </>
  )
}
