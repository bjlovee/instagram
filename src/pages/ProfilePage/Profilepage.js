import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileSection from '../../components/ProfileSection/ProfileSection'
import Footer from '../../components/Footer/Footer'
import styles from './ProfilePage.module.scss'
import { useState, useEffect } from 'react'

export default function ProfilePage ({
  userPosts,
  getPosts,
  profileUser,
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
  setLikesByPost,
  user,
  // getFollowing,
  // followingObjects,
  getFollowers,
  followerObjects,
  setFollowersPresent,
  followersPresent,
  followingPresent,
 
  setFollowingPresent
}) {

  useEffect(() => {
    if (profileUser) {
      getPosts(profileUser._id)
    }

  }, [])

// console.log(user)
  return (
    <div className={styles.profilePage}>
      <ProfileHeader 
        profileUser={profileUser}
        user={user}
        // getFollowing={getFollowing}
        // followingObjects={followingObjects}
        getFollowers={getFollowers}
        followerObjects={followerObjects}
        setFollowersPresent={setFollowersPresent}
        followersPresent={followersPresent}
        followingPresent={followingPresent}
      
        setFollowingPresent={setFollowingPresent}
      />
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
