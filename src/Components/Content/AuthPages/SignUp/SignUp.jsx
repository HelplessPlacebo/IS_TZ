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

    return <div style={{paddingLeft: "25%", paddingRight: "25%",paddingTop : "10%"}} className="SignUpContainer">
        <SignUpForRedux onSubmit={handleSubmit} />
    </div>
}
const SignUpForRedux = reduxForm({form: 'SignUpForm'})(SignUpForm)
export default SignUp

