// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function LandingPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
        </main>
    )
}