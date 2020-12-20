import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"


const CounterControls = (props) => {
    const onReduceCartItemsCount=()=>props.AddCartItem(props.cartItem,props.currency)
    const onIncreaseCartItemsCount=()=>{
        if(props.cartItem.count <= 1)  props.DelCartItem(props.cartItem.id,props.currency)
        else props.IncreaseCartItemCount(props.cartItem.id,props.currency)
    }
    return <Grid container direction="row" justify={"space-between"} alignItems={"center"}>
        <Grid item >
            <Button onClick={onIncreaseCartItemsCount}>
                <RemoveIcon fontSize="small"/>
            </Button>
        </Grid>

        <Grid item style={{paddingLeft:"0.75rem",paddingRight :"0.75rem"}}>
            {props.cartItem.count}
        </Grid>

        <Grid item >
            <Button  onClick={onReduceCartItemsCount}>
                <AddIcon fontSize="small"/>
            </Button>
        </Grid>
    </Grid>
}
export default CounterControls