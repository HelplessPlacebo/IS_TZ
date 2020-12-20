import {useState} from "react"

export const useBooleanState = (initialValue )  => {
    let [isDisplayed,SetIsOpen] =useState(initialValue)
    const Show = ()=>{
        SetIsOpen(true)
    }
    const Hide = ()=>{
        SetIsOpen(false)
    }
    return{
        isDisplayed,Show,Hide
    }
}
