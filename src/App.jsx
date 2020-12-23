import React, {useState} from "react"
import Header from "./Components/Header/Header"
import {useBooleanState} from "./Components/hooks/useBooleanState"
import PizzasContainer from "./Components/Content/HomePage/PizzasContainer"
import {Redirect, Route} from "react-router-dom"
import CheckOutPage from "./Components/Content/CheckOutPage/CheckOutPage"
import SnackBar from "./Components/SnackBar/SnackBar"
import {connect} from "react-redux"
import {AddCartItem, DelCartItem, getCartItemsFromLS, IncreaseCartItemCount} from "./Data/CartReducer";
import {setCurrency} from "./Data/GlobalReducer";
import Grid from "@material-ui/core/Grid";
import AuthPage from "./Components/Content/AuthPages/AuthPage";
import {useHistory} from 'react-router-dom'
import OrderHistory from "./Components/Content/OrderHistoryPage/OrderHistory";
import ProfileModal from "./Components/UserProfile/ProfileModal";
import {SetUserInfo} from "./Data/UserReducer"
import AS from "./App.module.css"

const App = (props) => {
    let history = useHistory()
    let SnackBarState = useBooleanState(false)
    let AuthState = useBooleanState(localStorage.getItem("isAuth"))
    let ProfileState = useBooleanState(false)
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

    return <Grid container direction="column" className={AS.main}>

        <Grid item style={{minHeight: "10rem"}} className="HeaderContainer">
                <Header DelCartItem={props.DelCartItem} cartItems={props.cartItems}
                        AddCartItem={props.AddCartItem} orderPrice={props.orderPrice}
                        CalculateOrderPrice={props.CalculateOrderPrice} DeliveryCost={props.DeliveryCost}
                        IncreaseCartItemCount={props.IncreaseCartItemCount} currency={props.currency}
                        SetCurrency={props.setCurrency} logOut={AuthState.Hide} history={history}
                        OpenProfileModal={ProfileState.Show}/>
        </Grid>

        <Grid item className="MainContentContainer">
            <Grid  container justify="center" alignItems="center">
                <Route exact path='/'
                       render={() => <Redirect to="/Home"/>}/>
                <Route exact path='/Home'
                       render={() => <PizzasContainer AddCartItem={props.AddCartItem}
                                                      ShowSnackBar={ShowSnackBar} currency={props.currency}/>}/>
                <Grid item  >
                    <Route exact path='/CheckOut'
                           render={() => <CheckOutPage cartItems={props.cartItems} orderPrice={props.orderPrice}
                                                       DeliveryCost={props.DeliveryCost} currency={props.currency}
                                                         UserInfo={props.UserInfo}/>}/>
                </Grid>

                {JSON.parse(localStorage.getItem("isAuth"))
                    ?
                    <Grid style={{width :"100%"}} item>
                        <Route exact path="/OrdersHistory"
                               render={() => <OrderHistory OrdersHistory={props.OrdersHistory} currency={props.currency}/>}/>
                    </Grid>

                    :
                    <Grid  item>
                        <Route exact path="/Auth"
                               render={() => <AuthPage ShowSnackBar={ShowSnackBar}
                                                       history={history} onAuth={AuthState.Show}/>}/>
                    </Grid>
                }

            </Grid>

        </Grid>
        <ProfileModal UserInfo={props.UserInfo} close={ProfileState.Hide}
                      isOpen={ProfileState.isDisplayed} SetUserInfo={props.SetUserInfo}/>
        <SnackBar isShowing={SnackBarState.isDisplayed} onHide={HideSnackBar} options={SnackBarOptions}/>

    </Grid>
}
const MSTP = (state) => ({
    ///cartItems: state.CartData.cartItems,
    cartItems: getCartItemsFromLS(),
    DeliveryCost: state.GlobalData.deliveryCost,
    orderPrice: state.CartData.orderPrice,
    currency: state.GlobalData.currency,
    OrdersHistory: state.UsersData.OrdersHistory,
    UserInfo: state.UsersData.UserInfo
})
export default connect(MSTP, {AddCartItem, DelCartItem,
    IncreaseCartItemCount, setCurrency,SetUserInfo})(App)
