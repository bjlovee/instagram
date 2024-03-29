import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileSection from '../../components/ProfileSection/ProfileSection'
import Footer from '../../components/Footer/Footer'
import styles from './ProfilePage.module.scss'
import { useEffect } from 'react'
import { getUser } from '../../utilities/users-service'

export default function ProfilePage ({
  userPosts,
  getPosts,
  profileUser,
  setPostModal,
  setPost,
  post,
  getComments,
  getLikesByPost,
  setLike,
  like,
  setLikesByPost,
  user,
  getFollowing,
  followingObjects,
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

  useEffect(() => {
    getUser(user._id)
  }, [])

  return (
    <div className={styles.profilePage}>
      <ProfileHeader
        profileUser={profileUser}
        user={user}
        numberOfPosts={userPosts.length}
        getFollowing={getFollowing}
        followingObjects={followingObjects}
        getFollowers={getFollowers}
        followerObjects={followerObjects}
        setFollowersPresent={setFollowersPresent}
        followersPresent={followersPresent}
        followingPresent={followingPresent}
        getUser={getUser}
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
