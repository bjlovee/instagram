import { useState, useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import HomePage from '../HomePage/HomePage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import ProfilePage from '../ProfilePage/Profilepage'
// import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route, Router } from 'react-router-dom'
import styles from '../App/App.module.scss'
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'
import NavBarTop from '../../components/NavBarTop/NavBarTop'
import NewPostModal from '../../components/NewPostModal/NewPostModal'
import NavBar from '../../components/NavBar/NavBar'
import ShowPostModal from '../../components/ShowPostModal/ShowPostModal'
import { ImportExport } from '@mui/icons-material'
import { ListItem } from '@mui/material'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  const [followersEvents, setFollowersEvents] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [postModal, setPostModal] = useState(false)
  const [posterInfo, setPosterInfo] = useState({})

  const [post, setPost] = useState({})
  const [userPosts, setUserPosts] = useState([])

  const [updateForm, setUpdateForm] = useState(false)
  const [addImageForm, setAddImageForm] = useState(false)

  const [showLogOut, setShowLogOut] = useState(false)

  const [commentsByPost, setCommentsByPost] = useState([])

  const [likesByPost, setLikesByPost] = useState([])
  const [like, setLike] = useState({})

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


  //Get likes by post
  const getLikesByPost = async (id) => {
    try {
      const response = await fetch(`/api/likes/${id}`)
      const data = await response.json()
      setLikesByPost(data)
    } catch (err) {
      console.log(err)
    }
  }


// console.log(user)
  // console.log(like)


  // Followers
  const getFollowers = async (id) => {
    try {
      const response = await fetch(`api/followers/follower/${id}`)
      const data = await response.json()
      setFollowersEvents(data)
    //   getPosts()
    } catch (err) {
      console.log(err)
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
    // console.log(id)
      const response = await fetch(`/api/users/${id}`)
      const data = await response.json()
      // console.log(data)
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
      // console.log(data)
      setUserPosts(data)
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

  //getUser
  const getUser = async (id) => {
    try{
      const response = await fetch(`api/users/${id}`)
      const data = await response.json()
      setUser(data)
    } catch (e) {
      console.error({ msg: e.message })
    }
  } 


  useEffect(() => {
    if (post) {
      getPosterInfo(post.poster)
    }
    // console.log(likesByPost)
    // handleSetLike()
  }, [])


  return (
    <main className={styles.App}>
      {
        user
          ? <>
            <Routes>
              <>
                <Route
                  path='/' element={<HomePage
                    user={user}

                    getFollowers={getFollowers}

                    setFollowersEvents={setFollowersEvents}
                    followersEvents={followersEvents}
                                    />}
                />

                <Route
                  path='/profile' element={<ProfilePage
                    userPosts={userPosts}
                    getPosts={getPosts}
                    getPosterInfo={getPosterInfo}
                    user={user}
                    setPostModal={setPostModal}
                    setPost={setPost}
                    post={post}
                    getComments={getComments}

                    getLikesByPost={getLikesByPost}
                    likesByPost={likesByPost}
                    // handleSetLike={handleSetLike}
                    setLike={setLike}
                    like={like}
                                           />}
                />
                <Route path='/orders' element={<OrderHistoryPage />} />
              </>
            </Routes>
            <NavBarTop />
            <NavBarBottom
              setShowModal={setShowModal}
              showModal={showModal}
              user={user}
              setUser={setUser}
              setAddImageForm={setAddImageForm}
              showLogOut={showLogOut}
              setShowLogOut={setShowLogOut}
            />
            <NewPostModal
              setShowModal={setShowModal}
              showModal={showModal}

              post={post}
              setPost={setPost}

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
              // handleSetLike={handleSetLike}


              
              setLike={setLike}
             
              like={like}
            />

          </>
          : <LandingPage
              setUser={setUser}
              user={user}

              getFollowers={getFollowers}

              setFollowersEvents={setFollowersEvents}
              followersEvents={followersEvents}
            />
      }
    </main>
  )
}

export default App

{ /* <Routes>
<Route path="/home" element={<HomePage
  user={user}

  getFollowers={getFollowers}

  setFollowersEvents={setFollowersEvents}
  followersEvents={followersEvents}
/>} />

<Route path='/profile' element={<ProfilePage/>}/>

</Routes> */ }

// return (
//   <main className={styles.App}>
//     {
//       user ?
//       <>
//                 <NavBarBottom
//               setShowModal={setShowModal}
//               showModal={showModal}
//               user={user}
//           />
//         <NavBarTop/>
//           <Routes>
//             <>
//               <Route path="/home" element={<HomePage
//                 user={user}

//                 getFollowers={getFollowers}

//                 setFollowersEvents={setFollowersEvents}
//                 followersEvents={followersEvents}
//               />} />

//               <Route path='/profile' element={<ProfilePage/>}/>
//             </>
//         </Routes>

//         <NewPostModal
//             setShowModal={setShowModal}
//             showModal={showModal}

//             post={post}
//             setPost={setPost}

//             user={user}
//             setUser={setUser}

//             setPostModal={setPostModal}

//             getPosterInfo={getPosterInfo}

//             setUpdateForm={setUpdateForm}
//             updateForm={updateForm}
//         />
//         <ShowPostModal
//             setShowModal={setShowModal}
//             showModal={showModal}

//             setPostModal={setPostModal}
//             postModal={postModal}

//             post={post}
//             setPost={setPost}

//             user={user}
//             setUser={setUser}
//             getPosterInfo={getPosterInfo}
//             posterInfo={posterInfo}

//             setUpdateForm={setUpdateForm}

//             setUserPosts={setUserPosts}
//             userPosts={userPosts}

//             deletePost={deletePost}
//         />

//       </>
//        :
//       <LandingPage
//         setUser={setUser}
//         user={user}

//         getFollowers={getFollowers}

//         setFollowersEvents={setFollowersEvents}
//         followersEvents={followersEvents}
//         />
//     }
//   </main>
// );
