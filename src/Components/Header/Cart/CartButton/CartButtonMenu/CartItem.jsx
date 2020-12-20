import React from "react"
import Grid from "@material-ui/core/Grid"
import CounterControls from "./CounterControls";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {GetCurrencySymb} from "../../../../../Data/GlobalReducer";


const CartItem = (props) => {
    const onCartItemDelete = () => props.DelCartItem(props.cartItem.id,props.currency)
    return <>
        <Grid style={{paddingTop: "2rem"}} container direction="row" justify="center" alignItems="center" spacing={3}>

            <Grid item>
                <img style={{maxWidth: "8rem", maxHeight: "8rem"}} src={props.cartItem.imgUrl} alt="PizzaImage"/>
            </Grid>

            <Grid style={{paddingLeft: "1rem"}} item>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid>
                        <span style={{fontWeight: 500, fontSize: "1.275rem"}}> {props.cartItem.name} </span>
                    </Grid>
                    <Grid style={{paddingTop: "1rem"}} item>
                        <CounterControls DelCartItem={props.DelCartItem} AddCartItem={props.AddCartItem}
                                         currency={props.currency}
                                         cartItem={props.cartItem} IncreaseCartItemCount={props.IncreaseCartItemCount}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid style={{paddingLeft: "1rem"}} item>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <DeleteOutlineIcon  onClick={onCartItemDelete} style={{cursor: "pointer"}} fontSize={"default"}/>
                    </Grid>
                    <Grid style={{fontWeight: 500, color: "#e94b0b", fontSize: "1.275rem"}} item>
                        {props.cartItem.price[props.currency]} {GetCurrencySymb(props.currency)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    </>
}

export default CartItem