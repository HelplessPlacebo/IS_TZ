import React from "react"
import Grid from "@material-ui/core/Grid";
import Contacts from "./Contacts";
import DeliveryAddress from "./DeliveryAdress";
import CustomizedButton from "../../CustomizedButton/CustomizedButton";
import OrderInfo from "./OrderInfo";
import {getCartItemsFromLS} from "../../../Data/CartReducer";

const CheckOutForm = (props) => {

    return <div className="CheckOutContainer">

        <form onSubmit={props.handleSubmit}>
            <Grid container direction="column">

                <Grid item>
                    <OrderInfo cartItems={props.cartItems} orderPrice={props.orderPrice}
                               DeliveryCost={props.DeliveryCost} currency={props.currency}/>
                </Grid>

                <Grid item style={{fontSize: "1.275rem", fontWeight: 500, paddingTop: "2rem"}}>
                    Contacts:
                </Grid>

                <Grid item>
                    <Contacts/>
                </Grid>

                <Grid item style={{fontSize: "1.275rem", fontWeight: 500, paddingTop: "2rem"}}>
                    Delivery address :
                </Grid>

                <Grid item>
                    <DeliveryAddress/>
                </Grid>

                <Grid item style={{paddingTop: "2rem"}}>
                    <CustomizedButton disabled={!getCartItemsFromLS().length > 0 } onClick={props.handleSubmit} text="confirm" variant="outlined" bgColor="teal"
                                      fontSize="1.115rem"/>
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
    </div>
}

export default CheckOutForm
