import React from "react";

const SET_CURRENCY = "GLOBAL/SET_CURRENCY"

let DefaultState = {
    currency : "USD",
    deliveryCost:{
        USD:5,
        EUR:4.08
    }
}
export const GetCurrencySymb=(value)=>{
    if(value==="USD") return  <span>&#36; </span>
    else return <span> &euro;</span>
}

const GlobalReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case SET_CURRENCY :{
            return {
                ...state,
                currency:action.Currency
            }
        }
        default :
            return state
    }
}

export const setCurrency = (Currency) =>{
    return{type:SET_CURRENCY,Currency}
}
export default GlobalReducer