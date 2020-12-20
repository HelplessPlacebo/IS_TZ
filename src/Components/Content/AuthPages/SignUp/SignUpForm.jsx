import React from "react"
import Grid from "@material-ui/core/Grid";
import CustomizedButton from "../../../CustomizedButton/CustomizedButton";
import {CreateField, FormInput} from "../../../../assets/utils/ValidatorsComponents/ElementsValidators";
import {required, Email,PassMinLength} from "../../../../assets/utils/validators";
import {NavLink} from "react-router-dom";
import DoneIcon from '@material-ui/icons/Done';

const SignUpForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        <div style={{fontSize: "1.512rem", fontWeight: 500}}>
            Sign up
        </div>

        <Grid style={{paddingTop: "1.5rem"}} container direction="column">
            <Grid item>
                {CreateField("Enter your name", "name", [required],
                    FormInput, {label: "name", fullWidth: true})}
            </Grid>

            <Grid item>
                {CreateField("Enter your email", "email", [required, Email],
                    FormInput, {label: "email", fullWidth: true})}
            </Grid>

            <Grid item>
                {CreateField("Enter your password", "password", [required,PassMinLength],
                    FormInput, {
                        label: "password", fullWidth: true,
                        type: "password", helperText: "password must be more then 6 letters"
                    })}
            </Grid>

            <Grid item style={{paddingTop: "1rem"}}>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item>
                        <CustomizedButton onClick={props.handleSubmit} text="complete"
                                          variant="outlined" fontColor="green"
                                          fontSize="1.11rem" startIcon={<DoneIcon/>}/>
                    </Grid>
                    <Grid item>
                        <NavLink style={{textDecoration : "none"}} to="/SignIn">
                            <CustomizedButton text="sign in" variant="outlined" fontColor="blue"
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

export default SignUpForm
