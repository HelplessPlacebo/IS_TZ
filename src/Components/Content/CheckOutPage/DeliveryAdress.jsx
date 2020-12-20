import React from "react"
import Grid from "@material-ui/core/Grid";
import {CreateField, FormInput} from "../../../assets/utils/ValidatorsComponents/ElementsValidators";
import {required} from "../../../assets/utils/validators";

const DeliveryAddress = (props)=>{
    return <Grid style={{paddingTop : "1rem"}} container direction="row">

        <Grid item>
            {CreateField("your street is..", "street", [required],
                FormInput,{label:"street"})}
        </Grid>

        <Grid item>
            {CreateField("house number", "houseNumber", [required],
                FormInput,{label : "house number"})}
        </Grid>

        <Grid item>
            {CreateField("Please enter your apart", "apart",
                [required], FormInput,{label:"apart"})}
        </Grid>
    </Grid>
}
export default DeliveryAddress