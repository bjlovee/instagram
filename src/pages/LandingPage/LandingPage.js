// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { Routes, Route } from 'react-router-dom'

export default function LandingPage(props){
    return(
        <main>
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