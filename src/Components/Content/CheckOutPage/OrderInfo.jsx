import React from "react"
import Grid from "@material-ui/core/Grid";
import {getCartItemsFromLS} from "../../../Data/CartReducer";
import {getOrderPriceFromLS} from "../../../Data/CartReducer";
import {GetCurrencySymb} from "../../../Data/GlobalReducer";

const OrderInfo = (props)=>{
    return <Grid style={{borderColor : "rgba(221,98,0,0.92)",
        borderWidth : 1,borderStyle : "solid",padding : 20,maxWidth : "44rem"}}
                 container direction={"column"} >
        <Grid item>
            <Grid container alignItems={"flex-start"} direction={"column"}
                  style={{fontWeight : 400,fontSize : "1.321rem"}}>
                <Grid item>
                    your order is :
                </Grid>
                {
                    getCartItemsFromLS().length > 0 && getCartItemsFromLS().map(cartItem=>{
                        return <Grid item key={cartItem.id} style={{paddingLeft : "0.475rem",paddingTop : "0.251rem"}}>
                            {cartItem.count} x {cartItem.name} ,
                            price : {cartItem.price[props.currency] * cartItem.count} {GetCurrencySymb(props.currency)}
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
        <Grid style={{fontWeight : 600,fontSize : "1.275rem"}} item >
            <Grid container alignItems={"center"} justify={"flex-end"}>
                <Grid item>
                    Total : {props.DeliveryCost[props.currency] + getOrderPriceFromLS()} {GetCurrencySymb(props.currency)}
                </Grid>
            </Grid>
        </Grid>
    </Grid>


}

export default OrderInfo