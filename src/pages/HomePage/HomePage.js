import styles from '../HomePage/HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';


export default function HomePage({
    user
}){

    const [postsByFollowers, setPostsByFollowers] = useState([])

//     const [array,setArray] = useState([]);
// Push value at the end:

// setArray(oldArray => [...oldArray,newValue] );
// Push value at the start:

// setArray(oldArray => [newValue,...oldArray] );

    return (
        <>
        {user.email}
        <header>
            {/* component placeholder */}
            {/* <div className={styles.navBarTop}></div> */}
            <NavBar />
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