import React from "react"
import Grid from "@material-ui/core/Grid";
import PizzaCard from "./PizzaCard";
import {connect} from "react-redux";


const PizzasContainer = (props) => {
    return <Grid className="PizzasContainerWrapper" container direction={"row"} alignItems={"center"} justify={"center"}>
        {
            props.Pizzas.map(pizzaEl => {
                return <Grid key={pizzaEl.id} item style={{maxWidth: "25rem",paddingLeft : "2rem"}} xs={3}>
                    <PizzaCard AddCartItem={props.AddCartItem} CardItem={pizzaEl}
                               ShowSnackBar={props.ShowSnackBar} currency={props.currency}/>
                </Grid>
            })
        }
    </Grid>
}
    let MSTP = (state) => ({
        Pizzas: state.PizzasData.AvailableOrders
    })

    export default connect(MSTP, {})(PizzasContainer)