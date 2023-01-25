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
        <footer>
          <ul class={styles.navigtaionList} id="footer-list">
            <li><a href="https://about.meta.com">Meta</a></li>
            <li><a href="https://about.instagram.com">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
          <p>	&#169; 2022 Instafake</p>
          </footer>
        </main>
    )
}