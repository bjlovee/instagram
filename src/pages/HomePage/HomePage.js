import styles from '../HomePage/HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar';
import { useState, useEffect } from 'react'
import Post from '../../components/Post';
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'
import NavBarTop from '../../components/NavBarTop/NavBarTop'
import { ResetTvRounded } from '@mui/icons-material';
// import { ConnectingAirportsOutlined } from '@mui/icons-material';

export default function HomePage({
    user,
    getFollowers,

    setFollowersEvents,
    followersEvents,
}){



const [followersPosts, setFollowersPosts] = useState([])


//settings posts data in loop
const handleSetPosts = (data) => {
    if(followersPosts.length < 1){
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
      console.log(data)
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


console.log(followersPosts)
    return (
        <>
            <header>
                {/* <NavBar /> */}
                <NavBarTop />
                
            </header>
            <section>
                {/* component placeholder */}
                <div className={styles.profileCarousel}>
                </div>
            </section>
            <section>
                {/* component placeholder */}
                <div className={styles.postsIndex}>
                    {/* {getPosts} */}
                <Post />
                    {/* component placeholder */}
                    <div className={styles.postContainer}>
                        {}
                    </div>
                    <div className={styles.postContainer}>
                        {/* {followersPosts[0].caption}<br/>
                        {followersPosts[0].image} */}
                    </div>
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
            <footer>
            <NavBarBottom />
            </footer>
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

