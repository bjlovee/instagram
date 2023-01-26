import { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'

function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])
  
  return (
    <main className="App">
      {
        user ?
        <>
          
          <Routes>
            <Route path="/home" element={<HomePage 
              user={user}
            />} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
          </Routes>
        </>
         :
        <LandingPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;