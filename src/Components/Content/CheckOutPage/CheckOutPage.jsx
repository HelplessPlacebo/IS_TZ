import React from "react"
import CheckOutForm from "./CheckOutForm";
import {reduxForm} from "redux-form";
import ModalInfo from "./ModalInfo";
import {useBooleanState} from "../../hooks/useBooleanState";

const CheckOutPage = (props) => {
    const ModalInfoState = useBooleanState(false)
    const handleSubmit = (formData) => {
        ModalInfoState.Show()
        console.log(formData)
    }

    return <div className="CheckOutContainer">
        <CheckOutFormRedux onSubmit={handleSubmit} cartItems={props.cartItems} orderPrice={props.orderPrice}
                           DeliveryCost={props.DeliveryCost} currency={props.currency}/>
        <ModalInfo ModalMenuISOpen={ModalInfoState.isDisplayed} close={ModalInfoState.Hide}/>
    </div>
}
const CheckOutFormRedux = reduxForm({form: 'CheckOutForm'})(CheckOutForm)
export default CheckOutPage

