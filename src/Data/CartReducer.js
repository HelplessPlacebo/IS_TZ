const ADD_CART_ITEM = "CART/ADD_CART_ITEM"
const DEL_CART_ITEM = "CART/DEL_CART_ITEM"
const INCREASE_CART_ITEM_COUNT = "CART/INCREASE_CART_ITEM_COUNT"

let DefaultState = {
    cartItems: [],
    orderPrice: null
}
export const getCartItemsFromLS = () => JSON.parse(localStorage.getItem("CartItems"))
export const getOrderPriceFromLS = () => JSON.parse(localStorage.getItem("OrderPrice"))

const CartReducer = (state = DefaultState, action) => {
    const GetCartItemsCopy = () => {
        return JSON.parse(JSON.stringify(state.cartItems))
    }
    const CalculateOrderPrice = (ItemsArr, currency, CartItem) => {
        let NewOrderPrice = 0
        if (ItemsArr && ItemsArr.length > 0) {
            ItemsArr.map(cartItem => {
                NewOrderPrice = NewOrderPrice + (cartItem.price[currency] * cartItem.count)
            })
            return NewOrderPrice.toFixed(2)
        } else {
            if (CartItem) return CartItem.price[currency].toFixed(2)
            else return 0
        }
    }
    switch (action.type) {
        case ADD_CART_ITEM : {
          //  let newCartItems = GetCartItemsCopy()
            let CartItemsLScopy = getCartItemsFromLS()
            if (CartItemsLScopy && CartItemsLScopy.length > 0) {
                if (CartItemsLScopy.some(el => el.id === action.CartItem.id)) {
                    CartItemsLScopy.find(el => el.id === action.CartItem.id).count++
                    localStorage.setItem("CartItems", JSON.stringify(CartItemsLScopy))
                } else {
                    CartItemsLScopy.push({count: 1, ...action.CartItem})
                    localStorage.setItem("CartItems", JSON.stringify(CartItemsLScopy))
                }
            } else {
                localStorage.setItem("CartItems", JSON.stringify([{count: 1, ...action.CartItem}]))
                // CartItemsLScopy.push({count: 1, ...action.CartItem})
            }
            localStorage.setItem("OrderPrice", CalculateOrderPrice(CartItemsLScopy, action.currency, action.CartItem))
            return {
                ...state,
                cartItems: CartItemsLScopy,
                orderPrice: CalculateOrderPrice(CartItemsLScopy, action.currency, action.CartItem)
            }
        }
        case DEL_CART_ITEM : {
            localStorage.setItem("CartItems", JSON.stringify(getCartItemsFromLS().filter(el => el.id !== action.CartItemId)))
            localStorage.setItem("OrderPrice", CalculateOrderPrice(getCartItemsFromLS().filter(el => el.id !== action.CartItemId), action.currency))
            return {
                ...state,
                cartItems: state.cartItems.filter(el => el.id !== action.CartItemId),
                orderPrice: CalculateOrderPrice(state.cartItems.filter(el => el.id !== action.CartItemId), action.currency)
            }
        }
        case INCREASE_CART_ITEM_COUNT: {
            //let newCartItems = GetCartItemsCopy()
            let newCartItems = getCartItemsFromLS()
            newCartItems.find(el => el.id === action.itemId).count--
            localStorage.setItem("CartItems", JSON.stringify(newCartItems))
            localStorage.setItem("OrderPrice", CalculateOrderPrice(newCartItems, action.currency))
            return {
                ...state,
                cartItems: newCartItems,
                orderPrice: CalculateOrderPrice(newCartItems, action.currency)
            }
        }
        default :
            return state
    }
}

export const AddCartItem = (CartItem, currency) => {
    return {type: ADD_CART_ITEM, CartItem, currency}
}
export const DelCartItem = (CartItemId, currency) => {
    return {type: DEL_CART_ITEM, CartItemId, currency}
}
export const IncreaseCartItemCount = (itemId, currency) => {
    return {type: INCREASE_CART_ITEM_COUNT, itemId, currency}
}
export default CartReducer