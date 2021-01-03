import React,{useState} from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const AuthPage  = (props) =>{
    const [ComponentToDraw,SetComponentToDraw] =useState("login")
    const ComponentIsSignIn = ()=>SetComponentToDraw("login")
    const ComponentIsSignUp =() => SetComponentToDraw("registration")
    return <div className="AuthWrapper">
            {
                ComponentToDraw === "login"
                    ? <SignIn ComponentIsSignUp={ComponentIsSignUp} history={props.history}
                              onAuth={props.onAuth} />
                    : <SignUp ComponentIsSignIn={ComponentIsSignIn}  />
            }
    </div>
}
export default AuthPage
