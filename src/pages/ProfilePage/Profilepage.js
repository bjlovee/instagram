import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import Footer from "../../components/Footer/Footer";
import styles from './ProfilePage.module.scss'
import { useState, useEffect }  from 'react'

export default function ProfilePage({
    userPosts,
    getPosts,
    user
}){

useEffect(() => {
  // fetchState()
  if(user){
    getPosts(user._id)
  }
}, [])

    return(
        <div className={styles.profilePage}>
          <ProfileHeader/>
          <ProfileSection
            userPosts={userPosts}
          />
          <Footer/>
        </div>
    )
}