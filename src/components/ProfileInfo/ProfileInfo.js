import styles from "./ProfileInfo.module.scss";
import React from "react"
import { useEffect } from "react";
export default function ProfileInfo({ profileUser, user, getFollowing, followingObjects }) {
  // console.log(profileUser.user.handle)
// console.log(profileUser)
// console.log(user)
console.log(followingObjects)






const createFollowing = async () => {
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
    getFollowing(user._id)
  } catch (error) {
    console.error(error)
  }
}

const checkIfFollowing = () => {
  followingObjects.filter((followingObject) => {
    if (followingObject.userFollowed === profileUser._id){
      // return <button >Un Follow</button>
      return true
      // console.log('works')
    }
  }) 
}

// useEffect(()=>{
//   followingObjects.filter((followingObject) => {
//     if (followingObject.userFollowed === profileUser._id){
//       return <button >Un Follow</button>
//       // console.log('works')
//     }
//   }) 
// })

// const deleteFollowing = async ()
console.log(profileUser._id)

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfoTop}>
        <div className={styles.username}>{profileUser.handle}</div>
        <div className={styles.followingButton}>
          {user._id !== profileUser._id && !{checkIfFollowing}
            ?
              <button onClick={createFollowing}>Follow</button>
            : user._id !== profileUser._id && {checkIfFollowing}

              ?
              <button onClick={()=>{
                console.log('click')
              }}>Un Follow</button>
              :
              ''                                           
          }
        </div>

        <div className={styles.messageButton}>Message</div>
        <div className={styles.suggestion}></div>
      </div>
      <div className={styles.profileStats}>
        <div>942 posts</div>
        <div>846 followers</div>
        <div>752 following</div>
      </div>
      <div className={styles.profileBio}>
        <div className={styles.profileBioHeader}>
          <div className={styles.profileBioHeaderName}>{profileUser.name}</div>
          <div className={styles.profileBioHeaderPronouns}>she/her/hers</div>
        </div>
        <p>
          I say stupid things and take random pictures. Messages from randos get
          insta-blocked. Bless your hearts
        </p>
        <div className={styles.profileBioFooter}>
          Followed by coleortizmackes, claireshiell. janicemcintyre + 54 more
        </div>
      </div>
    </div>
  );
}

// {user._id !== profileUser._id
//   ?
//     <button onClick={createFollowing}>Follow</button>
//   : user._id !== profileUser._id && {checkIfFollowing}

//     ?
//     <button >Un Follow</button>
//     :
//     ''                                           
// }