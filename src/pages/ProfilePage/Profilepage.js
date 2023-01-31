import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import Footer from "../../components/Footer/Footer";
import styles from './ProfilePage.module.scss'
import { useState, useEffect }  from 'react'

export default function ProfilePage({
    userPosts,
    getPosts,
    user,
    setPostModal,
    setPost,
    getPosterInfo,
    post,
    getComments
}){

  // console.log(user._id)
useEffect(() => {
  // fetchState()
  if(user){
    getPosts(user._id)
  }
    //   if(post){
    //   getPosterInfo(post.poster)
    // }
}, [])


// useEffect(() => {
//   fetchState()
//   // if a post exists, get the poster info
//   // console.log(post)
//     if(post){
//       getPosterInfo(post.poster)
//     }
//   // }
// }, [])



    return(
        <div className={styles.profilePage}>
          <ProfileHeader/>
          <ProfileSection
            userPosts={userPosts}
            setPostModal={setPostModal}
            setPost={setPost}
            getComments={getComments}
            // user={user}
          />
          <Footer/>
        </div>
    )
}