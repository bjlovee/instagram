import styles from '../HomePage/HomePage.module.scss'
import { useState, useEffect } from 'react'
import Post from '../../components/Post/Post';
import HomePageCarousel from '../../components/HomePageCarousel/HomePageCarousel'
import Footer from '../../components/Footer/Footer';
import SwitchProfile from '../../components/SwitchProfile/SwitchProfile';
import SuggestedProfile from '../../components/SuggestedProfile/SuggestedProfile';

export default function HomePage({
    user,
    getFollowers,

    setFollowersEvents,
    followersEvents,
}){


    

const [followersPosts, setFollowersPosts] = useState([])


//settings posts data in loop
const handleSetPosts = (data) => {
    //adding to state via conditional to prevent infinite loop
    if(followersPosts.length < followersEvents.length - 1){
        setFollowersPosts(followersPosts => [...followersPosts, data])
    }
    else{
        return;
    }
}

// getting the users followers posts by the latest post
const getFollowersLatestPost = async (id) => {
    try{
      const response = await fetch(`api/posts/poster/${id}`)
      const data = await response.json()
      handleSetPosts(data)
    } catch (e) {

    }
  }

//mapping through the array of followers and 
 const getPosts = () => {
    if(followersEvents.length > 0){
        followersEvents.map(event => {
            getFollowersLatestPost(event.followerUser)
        })
    }

 } 

//gets posts on page load
useEffect(() => {
    getPosts()
})


// console.log(followersPosts)

    return (
        <>
            <div className={styles.indexSection}>
              <section>
                <div className={styles.postsIndex}>
                  <section>
                    <HomePageCarousel/>
                  </section>
                  <Post />
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                    <div className={styles.postContainer}></div>
                </div>
              </section>
              <div className={styles.sectionWrapper}>
              <section className={styles.suggestedContainer}>
                <SwitchProfile/>
                <SuggestedProfile/>
              </section>
              </div>
            </div>
            <Footer/>
        </>
    )
}











// const [followersEvents, setFollowersEvents] = useState([])
// const [followersPosts, setFollowersPosts] = useState([])


//   // Index Restaurants
//   const getFollowers = async (id) => {
//     try {
//       const response = await fetch(`api/followers/follower/${id}`)
//       const data = await response.json()
//       setFollowersEvents(data)
//       getFollowersLatestPost(followersEvents.followerUser)
//     //   getPosts()
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const getFollowersLatestPost = async (id) => {
//     try{
//       const response = await fetch(`api/posts/poster/${id}`)
//       const data = await response.json()
//       console.log(data)
//     //   setFollowersPosts([...followersPosts, data])

//     } catch (e) {

//     }
//   }

// useEffect(() => {
//     getFollowers(user._id)
//   }, [])


// //number of followers
// console.log(followersEvents.length)

// //showing each follower event
// followersEvents.map(event => console.log(event))


// //getting one followers latest post
// followersEvents.map(event => {
//     getFollowersLatestPost(event.followerUser)
// })






































                    {/* <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div>
                    <div className={styles.postContainer}>
                        <div className={styles.post}></div>
                    </div> */}



                    //Get one post by follower




//     followersEvents.map(event => {
//         if (counter <= followersEvents.length){
//             getFollowersLatestPost(event.followerUser)
//         }
//         counter ++
//     })

    // console.log(followersPosts)




    // console.log(followersPosts)
// followersEvents.map(event => {
//     setFollowers(followers => [...followers, event])
// })



















// Followers in jims profile
//Followers
// "63d16996f11057f2263c9ca5",
    //followerUser 
    // "63d05696f24703987800a352" --> match to poster in post

//Followers
// "63d17a5e4500f61ebc60c114"
    // followerUser
    // "63d0563a41be762fc7220c7a" --> match to poster in post

//

