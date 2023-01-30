import styles from './ShowPostModal.module.scss'
import { useState, useEffect } from 'react'
import SwitchProfile from '../SwitchProfile/SwitchProfile'
import { Switch } from '@mui/material'

export default function ShowPostModal({
    post,
    setPost,
    user,
    postModal,
    setPostModal,
    posterInfo,
    getPosterInfo,
    setUpdateForm,
    showModal,
    setShowModal,
    deletePost
}){
    // console.log(post.poster)


useEffect(()=>{
    getPosterInfo(post.poster)
},[])

  // console.log(posterInfo)
    return(
        <>
        {postModal
            ?
            <>
              <button className={styles.closeButton} 
                  onClick={()=>{
                      setPostModal(false)
                  }}
              >&#x2715;</button>
              <div className={styles.modal}>
                <div className={styles.postCreation}>

                  <div className={styles.modalContainer}>
                  <div className={styles.formContainer}>
                      <img src={post.image}/>
                  </div>

                <div className={styles.commentsContainer}>
                <div className={styles.profileInfo}>
                  <SwitchProfile
                    image={post.posterPic}
                    handle={post.posterName}
                    location={post.location}
                    user={user}
                    post={post}

                    setUpdateForm={setUpdateForm}
                    showModal={showModal}
                    setShowModal={setShowModal}

                    setPostModal={setPostModal}
                    deletePost={deletePost}
                  />
                </div>
                <div className={styles.commentsIndex}></div>
                </div>
                </div>
                </div>
              </div>
            </>
            :
            ''
        }
    </>
    )

}


