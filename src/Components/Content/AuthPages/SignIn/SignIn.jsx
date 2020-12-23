import React,{} from "react"
import {reduxForm} from "redux-form"
import SignInForm from "./SignInForm";


const SignIn = (props) => {
    const handleSubmit = (formData) => {
        formData.email === "test@g.com" && formData.password === "test" && localStorage.setItem("isAuth","true")
        console.log(formData)
        props.onAuth()
        props.history.push("/Home")
    }

    return <div  className="SignInContainer">
            <SignInFormRedux onSubmit={handleSubmit} ComponentIsSignUp={props.ComponentIsSignUp}/>
    </div>
}
const SignInFormRedux = reduxForm({form: 'LoginInForm'})(SignInForm)
export default SignIn

