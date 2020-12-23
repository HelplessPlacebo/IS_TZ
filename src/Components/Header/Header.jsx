import React from "react"
import Grid from "@material-ui/core/Grid"
import CustomizedButton from "../CustomizedButton/CustomizedButton"
import CustomSelector from "../CustomSelector/CustomSelector"
import CartButtonContainer from "./Cart/CartButton/CartButtonContainer"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {NavLink} from "react-router-dom";
import ProfileIcon from "../UserProfile/ProfileIcon";

const Header = (props) => {

    return <Grid style={{height: 100}}
                 container direction="row" justify="space-around" alignItems="center">

        <Grid style={{fontSize: "2rem", fontFamily: "Bodoni MT", cursor: "pointer"}} item>
            <NavLink style={{textDecoration: "none", color: "#222"}} to="/Home">
                Any Pizzas
            </NavLink>
        </Grid>
        <Grid item>
            <Grid container direction="row" justify={"center"} alignItems={"center"}>
                <div style={{paddingRight: "1.5rem"}} className="LoginButtonContainer">
                    {
                        !JSON.parse(localStorage.getItem("isAuth"))
                            ?
                            <NavLink style={{textDecoration: "none"}} to="/Auth">
                                <CustomizedButton text="login" fontSize="1rem"
                                                  fontColor="cyan" variant="outlined" startIcon={<AccountCircleIcon/>}/>
                            </NavLink>
                            :
                            <ProfileIcon history={props.history} logOut={props.logOut}
                                         OpenProfileModal={props.OpenProfileModal}/>
                    }
                </div>

                <div style={{paddingRight: "1.5rem"}} className="CurrencyContainer">
                    <CustomSelector SetCurrency={props.SetCurrency} currency={props.currency}/>
                </div>

                <div className="CardContainer">
                    <CartButtonContainer cartItems={props.cartItems} DelCartItem={props.DelCartItem}
                                         AddCartItem={props.AddCartItem} orderPrice={props.orderPrice}
                                         DeliveryCost={props.DeliveryCost} currency={props.currency}
                                         IncreaseCartItemCount={props.IncreaseCartItemCount}/>
                </div>
            </Grid>
        </Grid>
    </Grid>
}

export default Header