import React from "react"
import {Grid} from "@material-ui/core";
import CustomizedButton from "../../CustomizedButton/CustomizedButton";
import {GetCurrencySymb} from "../../../Data/GlobalReducer";

const PizzaCard = (props) => {
    const onAddToCart = () => {
        props.AddCartItem(props.CardItem,props.currency)
        props.ShowSnackBar({
            message: "added for your cart!",
            HideDuration: 5000,
            position: {horizontal: "right", vertical: "bottom"},
            severity: "success"
        })
    }

    return <div className="CardWrapper">
        <Grid style={{paddingTop: "3rem"}} container justify="center" alignItems="center" direction="column">

            <Grid item>
                <img style={{width: "15rem", height: "15rem"}} src={props.CardItem.imgUrl} alt=""/>
            </Grid>

            <Grid item style={{fontWeight: 500, fontSize: "1.3rem"}}>
                {props.CardItem.name}
            </Grid>

            <Grid item xs={11}
                  style={{paddingTop: "0.5rem", fontFamily: "Comic Sans MS", color: "#888", fontSize: "0.875rem"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem, esse est magnam nam nisi
                numquam odio possimus qui, repellat soluta, ullam! A animi eum natus odio optio quis sed.
            </Grid>

        </Grid>

        <Grid container justify={"space-between"} style={{paddingTop: "1rem", paddingBottom: "3rem"}}>
            <Grid item style={{fontSize: "1.125rem", fontWeight: 500, paddingTop: "1.2rem"}}>
                { props.CardItem.price[props.currency]}{GetCurrencySymb(props.currency)}
            </Grid>

            <Grid item>
                <CustomizedButton onClick={onAddToCart} text="add to cart" fontSize="1rem"
                                  fontColor="deepOrange" variant="outlined"/>
            </Grid>
        </Grid>
    </div>
}

export default PizzaCard