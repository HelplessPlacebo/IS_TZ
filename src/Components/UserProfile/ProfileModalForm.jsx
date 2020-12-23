import React from "react"
import Grid from "@material-ui/core/Grid"
import CustomizedButton from "../CustomizedButton/CustomizedButton"
import {CreateField, FormInput} from "../../assets/utils/ValidatorsComponents/ElementsValidators"
import {required, PhoneNumber} from "../../assets/utils/validators"
import Save from "@material-ui/icons/Save"

const ProfileModalForm = (props) => {
    return <form style={{padding: "4rem"}} onSubmit={props.handleSubmit} className={"ProfileModalFormContainer"}>

        <div className="ProfileModalFistNameInput">
            {CreateField("Enter your first name", "firstName", [required],
                FormInput, {label: "first name", fullWidth: true})}
        </div>

        <div className="ProfileModalLastNameInput">
            {CreateField("Enter your lastName", "lastName", [required],
                FormInput, {label: "last name",  fullWidth: true})}
        </div>

        <div className="ProfileModalFormPhoneContainer">
            {CreateField("Enter the phone number", "phoneNumber",
                [required,PhoneNumber], FormInput,{label:"phone number",fullWidth: true})}
        </div>

        <div className="ProfileModalStreetInput">
            {CreateField("Enter  street address", "street", [],
                FormInput, {label: "street",  fullWidth: true})}
        </div>

        <div className="ProfileModalApartInput">
            {CreateField("Enter apart address ", "apart", [],
                FormInput, {label: "apart",  fullWidth: true})}
        </div>


        <div  style={{paddingTop: "1rem"}} className="SignInControlButton">
            <Grid container direction="row" justify="space-evenly" alignItems="center">

                <Grid item>
                    <CustomizedButton onClick={props.handleSubmit} text="save"
                                      variant="outlined" bgColor="indigo"
                                      fontSize="1.11rem" startIcon={<Save/>}/>
                </Grid>

                <Grid item>
                    <CustomizedButton onClick={props.close} text="close"
                                      variant="outlined" bgColor="red" fontSize="1.11rem"/>
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

export default ProfileModalForm
