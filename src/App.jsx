import React, {useState} from "react"
import MS from "./App.module.css"
import Header from "./Components/Header/Header"
import {useBooleanState} from "./Components/hooks/useBooleanState"
import PizzasContainer from "./Components/Content/HomePage/PizzasContainer"
import {Redirect, Route} from "react-router-dom"
import CheckOutPage from "./Components/Content/CheckOutPage/CheckOutPage"
import SignIn from "./Components/Content/AuthPages/SignIn/SignIn"
import SignUp from "./Components/Content/AuthPages/SignUp/SignUp"
import SnackBar from "./Components/SnackBar/SnackBar"
import {connect} from "react-redux"
import {AddCartItem, DelCartItem, getCartItemsFromLS, IncreaseCartItemCount} from "./Data/CartReducer";
import {setCurrency} from "./Data/GlobalReducer";

const App = (props) => {
    let SnackBarState = useBooleanState(false)
    let [SnackBarOptions, SetSnackBarOptions] = useState({
        message: "something goes wrong",
        HideDuration: 3000,
        position: {horizontal: "center", vertical: "bottom"},
        severity: "error"
    })

    const ShowSnackBar = (SnackBarOptions) => {
        SnackBarState.isDisplayed && SnackBarState.Hide()
        SetSnackBarOptions(SnackBarOptions)
        SnackBarState.Show()
    }

    const HideSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        SnackBarState.Hide()
    }

    return <div className={MS.MainWrapper}>

        <div className={MS.Header}>
            <Header DelCartItem={props.DelCartItem} cartItems={props.cartItems}
                    AddCartItem={props.AddCartItem}
                    orderPrice={props.orderPrice} CalculateOrderPrice={props.CalculateOrderPrice}
                    DeliveryCost={props.DeliveryCost} IncreaseCartItemCount={props.IncreaseCartItemCount}
                    currency={props.currency} SetCurrency={props.setCurrency}/>
        </div>

        <div className={MS.Content}>
            <Route exact path='/'
                   render={() => <Redirect to={"/Home"}/>}/>
            <Route exact path='/Home'
                   render={() => <PizzasContainer AddCartItem={props.AddCartItem}
                                                  ShowSnackBar={ShowSnackBar} currency={props.currency}/>}/>
            <Route exact path='/CheckOut'
                   render={() => <CheckOutPage cartItems={props.cartItems} orderPrice={props.orderPrice}
                                               DeliveryCost={props.DeliveryCost} currency={props.currency}/>}/>
            <Route exact path='/SignIn'
                   render={() => <SignIn/>}/>
            <Route exact path='/SignUp'
                   render={() => <SignUp ShowSnackBar={ShowSnackBar}/>}/>
        </div>
        <SnackBar isShowing={SnackBarState.isDisplayed} onHide={HideSnackBar} options={SnackBarOptions}/>
    </div>
}
const MSTP = (state) => ({
    ///cartItems: state.CartData.cartItems,
    cartItems: getCartItemsFromLS(),
    DeliveryCost: state.GlobalData.deliveryCost,
    orderPrice: state.CartData.orderPrice,
    currency: state.GlobalData.currency
})
export default connect(MSTP, {AddCartItem, DelCartItem, IncreaseCartItemCount,setCurrency})(App)
