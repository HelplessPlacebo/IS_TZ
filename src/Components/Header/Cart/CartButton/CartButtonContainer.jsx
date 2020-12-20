import React, {useState} from 'react';
import CartButton from "./CartButton";
import CartMenu from "./CartButtonMenu/CartMenu";
import CMS from "../cart.module.css";
import {getCartItemsFromLS} from "../../../../Data/CartReducer";

const CartButtonContainer = (props) => {
    const [CartMenuIsOpen, SetCartMenuIsOpen] = useState(false);
    const ShowCartMenu = () => {
        SetCartMenuIsOpen(true);
    }

    const HideCartMenu = () => {
        SetCartMenuIsOpen(false);
    }

    return (
        <>
            <div>
                <div onClick={ShowCartMenu}>
                    <CartButton itemsCount={props.cartItems && props.cartItems.length}/>
                </div>

                {// bg for close cart menu - custom click away
                    CartMenuIsOpen && <div onClick={HideCartMenu} className={CMS.bg}></div>
                }
                <CartMenu CartMenuIsOpen={CartMenuIsOpen} HideCartMenu={HideCartMenu}
                          cartItems={props.cartItems} DelCartItem={props.DelCartItem}
                          orderPrice={props.orderPrice} DeliveryCost={props.DeliveryCost}
                          AddCartItem={props.AddCartItem} IncreaseCartItemCount={props.IncreaseCartItemCount}
                          currency={props.currency}/>
            </div>
        </>
    );
}

export default CartButtonContainer