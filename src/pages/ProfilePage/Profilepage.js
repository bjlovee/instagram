import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileSection from '../../components/ProfileSection/ProfileSection'
import Footer from '../../components/Footer/Footer'
import styles from './ProfilePage.module.scss'
import { useState, useEffect } from 'react'

export default function ProfilePage ({
  userPosts,
  getPosts,
  user,
  setPostModal,
  setPost,
  getPosterInfo,
  post,
  getComments,
  getLikesByPost,
  likesByPost,
  handleSetLike,
  setLike,
  like,
  setLikesByPost
}) {

  useEffect(() => {
    if (user) {
      getPosts(user._id)
    }

  }, [])

// console.log(user)
  return (
    <div className={styles.profilePage}>
      <ProfileHeader />
      <ProfileSection
        userPosts={userPosts}
        setPostModal={setPostModal}
        setPost={setPost}
        post={post}

        getComments={getComments}

        getLikesByPost={getLikesByPost}
        setLikesByPost={setLikesByPost}
        setLike={setLike}
        like={like}
      />
      <Footer />
    </div>
  )
}
