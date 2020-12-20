import React from "react"
import {reduxForm} from "redux-form"
import {useBooleanState} from "../../../hooks/useBooleanState"
import SignInForm from "./SignInForm";

const SignIn = () => {
    const ModalInfoState = useBooleanState(false)
    const handleSubmit = (formData) => {
        ModalInfoState.Show()
        console.log(formData)
    }

    return <div style={{paddingLeft: "25%", paddingRight: "25%",paddingTop : "10%"}} className="SignInContainer">
        <SignInFormRedux onSubmit={handleSubmit}/>
    </div>
}
const SignInFormRedux = reduxForm({form: 'LoginInForm'})(SignInForm)
export default SignIn

