import React from "react"
import Grid from "@material-ui/core/Grid"
import CustomizedButton from "../../../CustomizedButton/CustomizedButton"
import {CreateField, FormInput} from "../../../../assets/utils/ValidatorsComponents/ElementsValidators"
import {required, Email} from "../../../../assets/utils/validators"

const SignInForm = (props) => {
    return <form style={{padding: "4rem"}} onSubmit={props.handleSubmit} className={"SignInFormContainer"}>

        <div  style={{fontSize: "1.512rem", fontWeight: 500}} className="SignInFormHeader">
            Sign in
        </div>

        <div className="SignInEmailInput">
            {CreateField("Enter your email", "email", [required, Email],
                FormInput, {label: "email", fullWidth: true})}
        </div>

        <div className="SignInPassWordInput">
            {CreateField("Enter your password", "password", [required],
                FormInput, {label: "password", type: "password", fullWidth: true})}
        </div>

        <div  style={{paddingTop: "1rem"}} className="SignInControlButton">
            <Grid container direction="row" justify="space-evenly" alignItems="center">

                <Grid item>
                    <CustomizedButton onClick={props.handleSubmit} text="enter"
                                      variant="outlined" fontColor="green"
                                      fontSize="1.11rem"/>
                </Grid>

                <Grid item>
                    <CustomizedButton onClick={props.ComponentIsSignUp} text="sign up"
                                      variant="outlined" fontColor="blue" fontSize="1.11rem"/>
                </Grid>
            </Grid>
        </div>

        {props.error
            ?
            <div style={{padding: [30, 0, 20, 0], fontSize: "1.125rem", color: "#ea1f09"}}>
                {props.error}
            </div>
            : null
        }
    </form>
}

export default SignInForm
