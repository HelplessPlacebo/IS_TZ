import React from "react"
import Grid from "@material-ui/core/Grid";
import CustomizedButton from "../../../CustomizedButton/CustomizedButton";
import {CreateField, FormInput} from "../../../../assets/utils/ValidatorsComponents/ElementsValidators";
import {required,Email} from "../../../../assets/utils/validators";
import {NavLink} from "react-router-dom";

const SignInForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        <div style={{fontSize : "1.512rem",fontWeight : 500}}>
            Sign in
        </div>

        <Grid style={{paddingTop : "1.5rem"}} container direction="column" >
            <Grid item>
                {CreateField("Enter your email", "email", [required,Email],
                    FormInput, {label: "email",fullWidth:true})}
            </Grid>

            <Grid item>
                {CreateField("Enter your password", "password", [required],
                    FormInput, {label: "password",fullWidth:true,type : "password"})}
            </Grid>

            <Grid item style={{paddingTop: "1rem"}}>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item>
                        <CustomizedButton onClick={props.handleSubmit} text="Sign in"
                                          variant="outlined" fontColor="green"
                                          fontSize="1.11rem"/>
                    </Grid>
                    <Grid item>
                        <NavLink style={{textDecoration : "none"}} to="/SignUp" >
                            <CustomizedButton  text="sign up" variant="outlined" fontColor="blue"
                                               fontSize="1.11rem"/>
                        </NavLink>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

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
