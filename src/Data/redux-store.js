import {applyMiddleware, combineReducers, createStore} from "redux"
//import  thunkMiddleWare from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import PizzasReducer from "./PizzasReducer"
import GlobalReducer from "./GlobalReducer"
import CartReducer from "./CartReducer"
import UserReducer from "./UserReducer";

let reducers = combineReducers({
    form : formReducer,
    PizzasData : PizzasReducer,
    GlobalData : GlobalReducer,
    CartData : CartReducer,
    UsersData : UserReducer
})

const store = createStore(reducers)
// const store = createStore(reducers,applyMiddleware(thunkMiddleWare))
//@ts-ignore
window.store = store
export default store
