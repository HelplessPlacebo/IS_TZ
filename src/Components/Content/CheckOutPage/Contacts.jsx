import React from "react"
import Grid from "@material-ui/core/Grid";
import {CreateField, FormInput} from "../../../assets/utils/ValidatorsComponents/ElementsValidators";
import {required,PhoneNumber} from "../../../assets/utils/validators";


const Contacts = (props) => {
    return <Grid style={{paddingTop: "1rem"}} container direction="row">

        <Grid item>
            {CreateField("Enter your full name", "firstName", [required],
                FormInput, {label: "first name"})}
        </Grid>

        <Grid item>
            {CreateField("enter your last name", "lastName", [required],
                FormInput, {label: "last name"})}
        </Grid>

        <Grid item>
            {CreateField("Enter the phone number", "phoneNumber",
                [required,PhoneNumber], FormInput,{label:"phone number"})}
        </Grid>
    </Grid>
}
export default Contacts