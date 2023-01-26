import styles from '../HomePage/HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar';
import { useState, useEffect } from 'react'
import Post from '../../components/Post';
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'
import NavBarTop from '../../components/NavBarTop/NavBarTop'

export default function HomePage({
    user
}){

    const [postsByFollowers, setPostsByFollowers] = useState([])

//     const [array,setArray] = useState([]);
// Push value at the end:

// setArray(oldArray => [...oldArray,newValue] );
// Push value at the start:

// setArray(oldArray => [newValue,...oldArray] );

//Get one post by follower


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

    return (
        <>
            {user.email}
            <header>
                {/* component placeholder */}
                {/* <div className={styles.navBarTop}></div> */}
                {/* <NavBar /> */}
                <NavBarTop />
                <NavBarBottom />
                <div className={styles.navBarSide}></div>
            </header>
            <section>
                {/* component placeholder */}
                <div className={styles.profileCarousel}>
                </div>
            </section>
            <section>
                {/* component placeholder */}
                <div className={styles.postsIndex}>
                <Post />
                    {/* component placeholder */}
                    <div className={styles.post}></div>
                    <div className={styles.post}></div>
                    <div className={styles.post}></div>
                    <div className={styles.post}></div>
                </div>
            </section>
        </>
    )
}