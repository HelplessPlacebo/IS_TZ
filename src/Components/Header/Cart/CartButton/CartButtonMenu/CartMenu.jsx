import React from "react";
import CMS from "../../cart.module.css"
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import CustomizedButton from "../../../../CustomizedButton/CustomizedButton";
import {getCartItemsFromLS} from "../../../../../Data/CartReducer";
import {getOrderPriceFromLS} from "../../../../../Data/CartReducer";
import {GetCurrencySymb} from "../../../../../Data/GlobalReducer";

const CartMenu = (props) => {
    return <div>
        {
            props.CartMenuIsOpen && <div className={CMS.CartMenuContainer}>
                {
                    getCartItemsFromLS() && getCartItemsFromLS().length > 0
                        ? <Grid container direction="column">
                            <Grid item>
                                {
                                    getCartItemsFromLS().map(cartItem =>
                                        <CartItem key={cartItem.id} cartItem={cartItem}
                                                  DelCartItem={props.DelCartItem} AddCartItem={props.AddCartItem}
                                                  IncreaseCartItemCount={props.IncreaseCartItemCount}
                                                  currency={props.currency}/>)
                                }
                            </Grid>

                            <Grid item style={{paddingTop: "2rem"}}>
                                <Grid direction="column" container justify={"center"} alignItems={"flex-end"}
                                      style={{fontSize: "1.275rem", fontWeight: 500}}>
                                    <Grid item>
                                        Order : {getOrderPriceFromLS()} {GetCurrencySymb(props.currency)}
                                    </Grid>
                                    <Grid style={{color: "#707070", paddingTop: "0.6rem"}} item>
                                        delivery : {props.DeliveryCost[props.currency]}{GetCurrencySymb(props.currency)}
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item style={{paddingTop: "1.5rem", fontWeight: 500, fontSize: "1.275rem"}}>
                                <Grid container direction="row" justify="space-between">
                                    <Grid item>
                                        Total :
                                    </Grid>
                                    <Grid item>
                                        {(getOrderPriceFromLS()+  props.DeliveryCost[props.currency]).toFixed(2) }
                                        {GetCurrencySymb(props.currency)}
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container justify={"center"} alignItems={"center"} style={{paddingTop: "1.5rem"}}>
                                <Grid item>
                                    <NavLink style={{textDecoration:"none"}} to="/CheckOut">
                                        <CustomizedButton text="Proceed" variant="outlined" fontSize="1.115rem"
                                                          fontColor="deepOrange" width="23rem"/>
                                    </NavLink>
                                </Grid>
                            </Grid>

                        </Grid>
                        : <EmptyCart/>
                }
            </div>
        }
    </div>
}
export default CartMenu