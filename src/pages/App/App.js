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

function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)



const [followersEvents, setFollowersEvents] = useState([])
const [showModal, setShowModal] = useState(false)
const [post, setPost] = useState({})

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


// console.log(followersPosts)

  return (
    <main className={styles.App}>
      {
        user ?
        <>
        {/* <NavBar/> */}
          <NavBarTop/>
          <NewPostModal
              setShowModal={setShowModal}
              showModal={showModal}
              post={post}
              setPost={setPost}
              user={user}
          />
          <Routes>
            <Route path="/home" element={<HomePage 
              user={user}

              getFollowers={getFollowers}

              setFollowersEvents={setFollowersEvents}
              followersEvents={followersEvents}
            />} />
            {/* <Route path="/orders" element={<OrderHistoryPage/>} /> */}
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>

          <NavBarBottom/>
          <NewPostModal/>
          <NavBarBottom 
                setShowModal={setShowModal}
                showModal={showModal}
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