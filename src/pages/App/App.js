import { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ProfilePage from '../ProfilePage/Profilepage';
// import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'
import styles from '../App/App.module.scss'
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom';
import NavBarTop from '../../components/NavBarTop/NavBarTop'
import NewPostModal from '../../components/NewPostModal/NewPostModal';
import NavBar from '../../components/NavBar/NavBar';
import ShowPostModal from '../../components/ShowPostModal/ShowPostModal';


function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)



const [followersEvents, setFollowersEvents] = useState([])
const [showModal, setShowModal] = useState(false)
const [postModal, setPostModal] = useState(false)
const [posterInfo, setPosterInfo] = useState({})


const [post, setPost] = useState({})
const [updateForm, setUpdateForm] = useState(false)


  // Index Restaurants
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
    console.log(id)
    const response = await fetch(`/api/users/${id}`)
    const data = await response.json()
    console.log(data)
    setPosterInfo(data)
    
  } catch (err) {
    console.log(err)
  }
}



useEffect(() => {
  fetchState()
  // getPosterInfo()
}, [])


  return (
    <main className={styles.App}>
      {
        user ?
        <>
          <Routes>
            <Route path="/home" element={<HomePage 
              user={user}

              getFollowers={getFollowers}

              setFollowersEvents={setFollowersEvents}
              followersEvents={followersEvents}
            />} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
          <NavBarBottom 
                setShowModal={setShowModal}
                showModal={showModal}
                user={user}
            />
        <NavBarTop/>
        <NewPostModal
              setShowModal={setShowModal}
              showModal={showModal}

              post={post}
              setPost={setPost}

              user={user}
              setUser={setUser}

              setPostModal={setPostModal}

              getPosterInfo={getPosterInfo}

              setUpdateForm={setUpdateForm}
              updateForm={updateForm}


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
          />

        </>
         :
        <LandingPage 
          setUser={setUser}
          user={user}

          getFollowers={getFollowers}

          setFollowersEvents={setFollowersEvents}
          followersEvents={followersEvents}
          />
      }
    </main>
  );
}

export default App;


