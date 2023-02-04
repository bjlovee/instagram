import { useState, useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import HomePage from '../HomePage/HomePage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import ProfilePage from '../ProfilePage/Profilepage'
import { Routes, Route, Router } from 'react-router-dom'
import styles from '../App/App.module.scss'
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'
import NavBarTop from '../../components/NavBarTop/NavBarTop'
import NewPostModal from '../../components/NewPostModal/NewPostModal'
import NavBar from '../../components/NavBar/NavBar'
import ShowPostModal from '../../components/ShowPostModal/ShowPostModal'
import { Helmet } from 'react-helmet'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  const [followerObjects, setFollowerObjects] = useState([])
  const [followingObjects, setFollowingObjects] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [postModal, setPostModal] = useState(false)
  const [posterInfo, setPosterInfo] = useState({})

  const [post, setPost] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])

  const [updateForm, setUpdateForm] = useState(false)
  const [addImageForm, setAddImageForm] = useState(false)

  const [showLogOut, setShowLogOut] = useState(false)

  const [commentsByPost, setCommentsByPost] = useState([])

  const [likesByPost, setLikesByPost] = useState([])
  const [like, setLike] = useState({})

  const [allUsers, setAllUsers] = useState([])

  const [profileUser, setProfileUser] = useState()

  const [followersPresent, setFollowersPresent] = useState(false)
  const [followingPresent, setFollowingPresent] = useState(false)

  // Index Comments by post
  const getComments = async (id) => {
    // console.log(id)
    try {
      const response = await fetch(`/api/comments/post/${id}`)
      const data = await response.json()
      // console.log(data)
      setCommentsByPost(data)
    } catch (err) {
      console.log(err)
    }
  }

  // Get likes by post
  const getLikesByPost = async (id) => {
    try {
      const response = await fetch(`/api/likes/${id}`)
      const data = await response.json()
      setLikesByPost(data)
    } catch (err) {
      console.log(err)
    }
  }

 
  // Get the usets that are following you!
  const getFollowers = async (id) => {
    try {
      const response = await fetch(`api/followers/follower/${id}`)
      const data = await response.json()
      console.log(data)
      getFollowing(id)
      setFollowerObjects(data)
    //   getPosts()
    } catch (err) {
      console.log({ msg: err.message })
    }
  }

  // Get the users you are following!
  const getFollowing = async (id) => {
    try {
      const response = await fetch(`api/followers/following/${id}`)
      const data = await response.json()
      setFollowingObjects(data)
    } catch (e) {
      console.error({ msg: e.message })
    }
  }

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  // Get User Info
  const getPosterInfo = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`)
      const data = await response.json()
      setPosterInfo(data)
    } catch (err) {
      console.log(err)
    }
  }

  // get Posts by user
  const getPosts = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`)
      const data = await response.json()
      setUserPosts(data)
    } catch (e) {
      console.error({ msg: e.message })
    }
  }

  // get all posts
  const getAllPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setAllPosts(data)
    } catch (e) {
      console.error({ msg: e.message })
    }
  }

  // Delete Post
  const deletePost = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setPost({})
      getPosts(user._id)
    } catch (error) {
      console.error(error)
    }
  }

  // getUser
  const getUser = async (id) => {
    try {
      const response = await fetch(`api/users/${id}`)
      const data = await response.json()
      setUser(data)
    } catch (e) {
      console.error({ msg: e.message })
    }
  }

  const getUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setAllUsers(data)
    } catch (e) {
      console.error({ msg: e.message })
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  useEffect(() => {
    getUsers()
    getAllPosts()
    if (user) {
      console.log('here')
      getFollowers(user._id)
    }
  }, [])

  useEffect(() => {
    if (post) {
      getPosterInfo(post.poster)
    }
  }, [])

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (user) {
      getUser(user._id)
    }
  }, [])


  return (
    <main className={styles.App}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Instafake</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='description' content='Instagram SPA clone' />
      </Helmet>
      {
        user
          ? <>
            <Routes>
              <>
                <Route
                  path='/' element={<HomePage
                    user={user}
                    allPosts={allPosts}
                    getFollowers={getFollowers}
                    getAllPosts={getAllPosts}
                    setPost={setPost}
                    post={post}
                    setPostModal={setPostModal}
                    setProfileUser={setProfileUser}
                    allUsers={allUsers}

                    getComments={getComments}

                    getLikesByPost={getLikesByPost}
                    setLikesByPost={setLikesByPost}
                    setLike={setLike}
                    like={like}
                                    />}
                />

                <Route
                  path='/profile' element={<ProfilePage
                    userPosts={userPosts}
                    getPosts={getPosts}
                    getPosterInfo={getPosterInfo}
                    user={user}
                    profileUser={profileUser}
                    setPostModal={setPostModal}
                    setPost={setPost}
                    post={post}
                    getComments={getComments}

                    getLikesByPost={getLikesByPost}
                    likesByPost={likesByPost}
                    setLike={setLike}
                    like={like}

                    getFollowing={getFollowing}
                    followingObjects={followingObjects}

                    getFollowers={getFollowers}
                    followerObjects={followerObjects}

                    setFollowersPresent={setFollowersPresent}
                    followersPresent={followersPresent}

                    setFollowingPresent={setFollowingPresent}
                    followingPresent={followingPresent}
                                           />}
                />
                <Route path='/orders' element={<OrderHistoryPage />} />
              </>
            </Routes>
            <NavBarTop
              allUsers={allUsers}
              setProfileUser={setProfileUser}
              getUsers={getUsers}
              getPosts={getPosts}
              profileUser={profileUser}

              setFollowersPresent={setFollowersPresent}
              followersPresent={followersPresent}
              setFollowingPresent={setFollowingPresent}
            />
            <NavBarBottom
              setShowModal={setShowModal}
              showModal={showModal}
              user={user}
              setProfileUser={setProfileUser}
              setUser={setUser}
              setAddImageForm={setAddImageForm}
              showLogOut={showLogOut}
              setShowLogOut={setShowLogOut}
              getPosts={getPosts}
            />
            <NewPostModal
              setShowModal={setShowModal}
              showModal={showModal}

              setProfileUser={setProfileUser}
              profileUser={profileUser}
              post={post}
              setPost={setPost}
              getPosts={getPosts}
              user={user}
              setUser={setUser}
              getUser={getUser}

              setPostModal={setPostModal}

              getPosterInfo={getPosterInfo}

              setUpdateForm={setUpdateForm}
              updateForm={updateForm}
              addImageForm={addImageForm}
              setAddImageForm={setAddImageForm}

            />
            <ShowPostModal
              setShowModal={setShowModal}
              showModal={showModal}

              setPostModal={setPostModal}
              postModal={postModal}

              post={post}
              setPost={setPost}

              user={user}
              setUser={setUser}
              getAllPosts={getAllPosts}

              getPosterInfo={getPosterInfo}
              posterInfo={posterInfo}

              setUpdateForm={setUpdateForm}

              setUserPosts={setUserPosts}
              userPosts={userPosts}

              deletePost={deletePost}

              getComments={getComments}
              commentsByPost={commentsByPost}

              getLikesByPost={getLikesByPost}
              setLikesByPost={setLikesByPost}
              likesByPost={likesByPost}
              setLike={setLike}

              like={like}
            />

          </>
          : <LandingPage
              setUser={setUser}
              user={user}
              getFollowers={getFollowers}
            />
      }
    </main>
  )
}

export default App
