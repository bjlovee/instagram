import styles from './ProfileInfo.module.scss'
import React, { useEffect } from 'react'

export default function ProfileInfo ({
  profileUser,
  user,
  getFollowing,
  followingObjects,
  getFollowers,
  followerObjects,
  setFollowersPresent,
  followersPresent,
  followingPresent,
  setFollowingPresent,
  numberOfPosts
}) {
  console.log(followerObjects)
  console.log(followingObjects)

  const createFollow = async () => {
    try {
      const response = await fetch('/api/followers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        // nesting the user id on creation
          followerUser: user._id,
          userFollowed: profileUser._id
        })
      })
      const data = await response.json()
      console.log(data)
      getFollowers(user._id)
    } catch (error) {
      console.error(error)
    }
  }

  const createFollowBack = async () => {
    try {
      const response = await fetch('/api/followers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        // nesting the user id on creation
          followerUser: user._id,
          userFollowed: profileUser._id
        })
      })
      const data = await response.json()
      console.log(data)
      getFollowers(user._id)
    } catch (error) {
      console.error(error)
    }
  }

  // Delete Comment
  const deleteFollowing = async (id) => {
    try {
      await fetch(`/api/followers/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      getFollowers(user._id)
    } catch (error) {
      console.error(error)
    }
  }


  const checkFollowing = () => {
    followingObjects.filter(object => setFollowingPresent((object.userFollowed === profileUser._id)))
  }

  const checkFollowed = () => {
    followingObjects.filter(object => setFollowersPresent((object.followerUser === profileUser._id)))
  }

  useEffect(() => {
    if (followerObjects.length >= 0) {
      checkFollowing()
    } else {
      checkFollowing(false)
    }
  })

  useEffect(() => {
    if (followerObjects.length >= 0) {
      checkFollowed()
    } else {
      checkFollowed(false)
    }
  })

  useEffect(() => {
    getFollowers(user._id)
  }, [])

  console.log(profileUser._id)
  console.log(user._id)

  console.log(followingPresent)
  console.log(followersPresent)

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfoTop}>
        <div className={styles.username}>{profileUser.handle}</div>
        <div className={styles.followingButton}>
          {/* if you are not viewing your own profile, and if either you or the profile user hasnt followed, then you can follow */}
          {user._id !== profileUser._id && !followingPresent && !followersPresent
            ? <button onClick={createFollow}>Follow</button>
          // if you are not viewing your own profile, and if youre not following the viewed profile user, and if you are being followed by the profile user
            : user._id !== profileUser._id && !followingPresent && followersPresent
              ? <button onClick={createFollowBack}>Follow back</button>
            // if you are not viewing your own profile, and if you are following the user profile, but the user profile is not following you
              : user._id !== profileUser._id && followingPresent && !followersPresent
                ? <button>Waiting for a response</button>
              // if you are not viewing your own profile, and if you are following the viewed profile user, and the profile user is following you
                : user._id !== profileUser._id && followingPresent && followersPresent
                  ? <button onClick={() => {
                    deleteFollowing(profileUser._id)
                  }}
                    >Unfollow
                  </button>
                  : ''}

        </div>
        <div className={styles.suggestion} />
      </div>
      <div className={styles.profileStats}>
        <div><span className={styles.posts}>{numberOfPosts}</span> posts</div>

        <div><span>{profileUser.followers ? profileUser.followers.length : 0}</span> followers</div>
        <div><span>{profileUser.following ? profileUser.following.length : 0}</span> following</div>
      </div>
      <div className={styles.profileBio}>
        <div className={styles.profileBioHeader}>
          <div className={styles.profileBioHeaderName}>{profileUser.name}</div>
        </div>

      </div>
    </div>
  )
}
