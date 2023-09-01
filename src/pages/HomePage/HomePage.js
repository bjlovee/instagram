import styles from '../HomePage/HomePage.module.scss'
import { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import HomePageCarousel from '../../components/HomePageCarousel/HomePageCarousel'
import Footer from '../../components/Footer/Footer'
import SwitchProfile from '../../components/SwitchProfile/SwitchProfile'
import SuggestedProfile from '../../components/SuggestedProfile/SuggestedProfile'

export default function HomePage ({
  user,
  allPosts,
  followersObjects,
  setPost,
  setPostModal,
  setProfileUser,
  allUsers,
  getComments,
  getLikesByPost
}) {
  const [followersPosts, setFollowersPosts] = useState([])

  // settings posts data in loop
  const handleSetPosts = (data) => {
    setFollowersPosts(followersPosts => [...followersPosts, data])
  }

  // getting the users followers posts by the latest post
  const getFollowersLatestPost = async (id) => {
    try {
      const response = await fetch(`api/posts/poster/${id}`)
      const data = await response.json()
      handleSetPosts(data)
    } catch (e) {

    }
  }

  // mapping through the array of followers and
  const getPosts = () => {
    if (followersObjects) {
      followersObjects.map(event => {
        getFollowersLatestPost(event.followerUser)
      })
    }
  }

  // get followers
  useEffect(() => {

  })

  // gets posts on page load
  useEffect(() => {
    getPosts()
  }, [followersPosts])

  const handleSelectPost = (post) => {
    setPost(post)
    setPostModal(true)
    getComments(post._id)
    getLikesByPost(post._id)
  }

  return (
    <>
      <div className={styles.indexSection}>
        <section>
          <div className={styles.postsIndex}>
            <section>
              <HomePageCarousel />
            </section>
            {/* Only indexing the latest 15 posts  */}
            {allPosts
              ? allPosts.map((post, i) => {
                if (i < 15) {
                  return (
                    <div onClick={(e) => {
                      e.preventDefault()
                      handleSelectPost(post)
                    }}
                    >
                      <Post
                        post={post}
                      />
                    </div>
                  )
                }
              })

              : 'No Posts Yet'}
          </div>
          <br />
          <p>You are up to date</p>
        </section>
        <div className={styles.sectionWrapper}>
          <section className={styles.suggestedContainer}>
            <SwitchProfile
              user={user}
              handle={user.handle}
              image={user.profilePic}
              setProfileUser={setProfileUser}
            />
            <SuggestedProfile
              allUsers={allUsers}
              user={user}
              setProfileUser={setProfileUser}

            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
