import { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ProfilePage from '../ProfilePage/Profilepage';
// import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'
import styles from '../App/App.module.scss'

function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)



const [followersEvents, setFollowersEvents] = useState([])


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





  // const fetchState = async () => {
  //   try {
  //     const response = await fetch('/api/test')
  //     const data = await response.json()
  //     setState(data)
  //   } catch (error) {
  //     console.error(error) 
  //   }
  // }


  

// console.log(followersPosts)

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
            <Route path="/orders" element={<OrderHistoryPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
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