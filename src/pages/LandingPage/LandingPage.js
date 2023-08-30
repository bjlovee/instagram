import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Routes, Route } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import styles from '../LandingPage/LandingPage.module.scss'

export default function LandingPage (props) {
  return (
    <main className={styles.LandingPage}>
      <Routes>
        <Route
          path='/signup' element={
            <SignUpForm setUser={props.setUser} />
                }
        />
        <Route
          path='/' element={
            <LoginForm
              setUser={props.setUser}
              user={props.user}
              getFollowers={props.getFollowers}
            />
                }
        />
      </Routes>
      <Footer />
    </main>
  )
}
