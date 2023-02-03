import styles from "./ProfileInfo.module.scss";
import React from "react"
import { useEffect, useState } from "react";

export default function ProfileInfo({ 
  profileUser, 
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


console.log(followerObjects)




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







//filtering to see if the profile being viewed is following the user
const checkFollowed = () => {
  followerObjects.filter(object => setFollowersPresent((object.followerUser === profileUser._id)))
}

//filtering to see if the profile being viewed is following the user
const checkFollowing = () => {
  followerObjects.filter(object => setFollowingPresent((object.userFollowed === profileUser._id)))
}

useEffect(()=>{
  if(followerObjects.length >= 0){
    checkFollowing()
  } else {
    checkFollowing(false)
  }
  
})


useEffect(()=>{
  if(followerObjects.length >= 0){
    checkFollowed() 
  }
  else{
    checkFollowed(false)
  }
  
})



useEffect(() => 
{
  getFollowers(user._id)
}, [])

//---check if you are following the user---//

//followingObjects
// userFollowed === profileUser._id




//---check if you are being followed---//

//followersObjects
//followerUser === profileUser







console.log(profileUser._id)
console.log(user._id)




console.log(followingPresent)
console.log(followersPresent)




  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileInfoTop}>
        <div className={styles.username}>{profileUser.handle}</div>
        <div className={styles.followingButton}>
          {/* if you are not viewing your own profile, and if either you or the profile user hasnt followed, then you can follow*/}
          {user._id !== profileUser._id && !followersPresent && !followingPresent
            ?
              <button onClick={createFollow}>Follow</button>
              // if you are not viewing your own profile, and if either you or the profile user has followed, then you can unfollow
                : user._id !== profileUser._id && !followersPresent && followingPresent || followersPresent && !followingPresent 
                  ?
                    <button onClick={()=>{
                      deleteFollowing(profileUser._id)
                    }}>Unfollow</button>
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














// {user._id !== profileUser._id && !followingPresent && !followersPresent
//   ?
//     <button onClick={createFollow}>Follow</button>
//   // if you are not viewing your own profile, and if youre not following the viewed profile user, and if you are being followed by the profile user
//   :user._id !== profileUser._id && !followingPresent && followersPresent
//     ?
//       <button onClick={createFollowBack}>Follow back</button>
//     // if you are not viewing your own profile, and if you are following the user profile, but the user profile is not following you
//     : user._id !== profileUser._id && followingPresent && !followersPresent 
//       ?
//         <button >Waiting for a response</button>
//          // if you are not viewing your own profile, and if you are following the viewed profile user, and the profile user is following you
//       : user._id !== profileUser._id && followingPresent && followersPresent
//         ?
//           <button onClick={()=>{
//             deleteFollowing(profileUser._id)
//           }}>Unfollow</button>
//         :
//           ''                                           
// }










// const checkFollowing = () => {
//   followingObjects.filter(object => setFollowingPresent((object.userFollowed === profileUser._id)))
//   // console.log(console.log(followingObjects.filter(object => object.userFollowed === profileUser._id)))
// }









// const createFollow = async () => {
//   try {
//     const response = await fetch('/api/followers/follow', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         // nesting the user id on creation
//         followerUser: user._id,
//         userFollowed: profileUser._id
//       })
//     })
//     const data = await response.json()
//     console.log(data)
//     getFollowers(user._id)
//   } catch (error) {
//     console.error(error)
//   }
// }

// const createFollowBack = async () => {
//   try {
//     const response = await fetch('/api/followers/following', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         // nesting the user id on creation
//         followerUser: profileUser._id,
//         userFollowed: user._id,
//       })
//     })
//     const data = await response.json()
//     console.log(data)
//     getFollowing(user._id)
//   } catch (error) {
//     console.error(error)
//   }
// }

















// {
//   user._id !== profileUser._id
//     ?
//       <button onClick={createFollowing}>Follow</button>
//     :
//       ''
// }




          // {/* if you are not viewing your own profile, and if the user is not following the the viewed profile user and the profile user is not following the user*/}
          // {user._id !== profileUser._id && !{checkIfFollowing} && !{checkIfFollowed}
          //   ?
          //     <button onClick={createFollowing}>Follow</button>
          //   // if you are not viewing your own profile, and if you not following the viewed profile user, and if you are being followed by the profile user
          //   :user._id !== profileUser._id && !{checkIfFollowing} && {checkIfFollowed}
          //     ?
          //       <button onClick={()=>{console.log('click')}}>Follow back</button>
          //       // if you are not viewing your own profile, and if you are following the viewed profile user, and the profile user is following you
          //     : user._id !== profileUser._id && {checkIfFollowing} && {checkIfFollowed}
          //       ?
          //         <button onClick={()=>{console.log('click')}}>Unfollow</button>
          //       :
          //         ''                                           
          // }





// useEffect(()=>{
//   followingObjects.filter(object => setFollowingPresent((object.userFollowed === profileUser._id)))
// })


// useEffect(()=>{
//   followerObjects.filter(object => setFollowersPresent((object.followerUser === profileUser._id)))
// })





// //checking if the profile being viewes is following you
// const checkIfFollowing = () => {
//   //indexing through the following objects to see if it matches the current viewed profile
//   if (followingObjects.filter(followingObject => followingObject && followingObject.userFollowed === profileUser._id)){
//     return setFollowingPresent(true)
//    }



//---check if you are following the user---//

//followingObjects
// userFollowed === profileUser._id




//---check if you are being followed---//

//followersObjects
//followerUser === profileUser



// }
// //checking if you are following the profile being viewed
// const checkIfFollowed = () => {
//   //indexing through the follower objects to see if it matches the current viewed profile
//  if (followerObjects.filter(followerObject => followerObjects && followerObject.userFollowed === profileUser._id)){
//   return setFollowersPresent(true)
//  }

// }
 


















// useEffect(() =>{
//   console.log(followingObjects.filter((object) => object.userFollowed === profileUser._id))
// }, [])





// //checking if the profile being viewes is following you
// const checkIfFollowing = () => {
//   //indexing through the following objects to see if it matches the current viewed profile
//   if (followingObjects.filter(followingObject => followingObject && followingObject.userFollowed === profileUser._id)){
//     return setFollowingPresent(true)
//    }

// }

// //checking if you are following the profile being viewed

// const checkIfFollowed = () => {
//   //indexing through the follower objects to see if it matches the current viewed profile
//  if (followerObjects.filter(followerObject => followerObjects && followerObject.userFollowed === profileUser._id)){
//   return setFollowersPresent(true)
//  }

// }
 
// useEffect(() =>{
//   checkIfFollowed()
//   checkIfFollowing()
// }, [])















// {user._id !== profileUser._id
//   ?
//     <button onClick={createFollowing}>Follow</button>
//   : user._id !== profileUser._id && {checkIfFollowing}

//     ?
//     <button >Un Follow</button>
//     :
//     ''                                           
// }




// useEffect(() => {
//   // checkFollowing()
//   setState(followingObjects && followingObjects.filter(followingObject => followingObjects && followingObject.userFollowed === profileUser._id))
// }, [])




// const checkIfFollowed = () => {
//   //indexing through the follower objects to see if it matches the current viewed profile
//   followerObjects.filter((followerObject) => {
//     if (followerObjects && followerObject.userFollowed === profileUser._id){
//       // console.log('true')
//       return true
//     }
//     else{
//       return false
//     }
//   }) 
// }





// const checkIfFollowing = () => {
//   //indexing through the following objects to see if it matches the current viewed profile
//   followingObjects.filter((followingObject) => {
//     if (followingObject.userFollowed === profileUser._id){
//       console.log('true')
//       return true
//     }
//   }) 
// }





// const checkFollowing = () => {
//   followerObjects.filter((followerObject) => {
//     if ((followerObjects && followerObject.userFollowed === profileUser._id) !== null){
//       console.log('exists')
//     }
//     else{
//       console.log('does not')
//     }
//   })

// }



// const [state, setState] = useState(false)

// const checkFollowing = () => {
//   if (followingObjects && followingObjects.filter(followingObject => followingObjects && followingObject.userFollowed === profileUser._id)){
//     console.log()
//     // return true
//      return setState(true)
//   }
//   return setState(false)
// }




// const createFollowingIfBeingFollowed = async () => {
//   try {
//     const response = await fetch('/api/followers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         // nesting the user id on creation
//         followerUser: user._id,
//         userFollowed: profileUser._id
//       })
//     })
//     const data = await response.json()
//     console.log(data)
//     getFollowers()
//   } catch (error) {
//     console.error(error)
//   }
// }


