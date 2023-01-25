import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Routes, Route } from 'react-router-dom'
import styles from '../LandingPage/LandingPage.module.scss'

export default function LandingPage(props){
    return(
        <main className={styles.LandingPage}>
            <Routes>
                <Route path="/signup" element={
                  <SignUpForm setUser={props.setUser}/>
                }/>
                <Route path="/" element={
                  <LoginForm setUser={props.setUser}/>
                }/>
            </Routes>
        </main>
    )
}