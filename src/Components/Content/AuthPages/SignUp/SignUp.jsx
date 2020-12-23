import React from "react"
import {reduxForm} from "redux-form"
import SignUpForm from "./SignUpForm";

const SignUp = (props) => {
    const handleSubmit = (formData) => {
        props.ShowSnackBar({message: "Account was create. Check your email!",severity:"success",position:{
            vertical:"top",horizontal:"center"
            }})
        console.log(formData)
    }

    return <div   className="SignUpContainer">
        <SignUpForRedux onSubmit={handleSubmit} ComponentIsSignIn={props.ComponentIsSignIn} />
    </div>
}
const SignUpForRedux = reduxForm({form: 'SignUpForm'})(SignUpForm)
export default SignUp

