const SET_USER_INFO = "USER/SET_USER_INFO"
// const SET_ORDERS_HISTORY = "USER/SET_ORDERS_HISTORY"
const ADD_ITEM_TO_ORDER_HISTORY = "USER/ADD_ITEM_TO_ORDER_HISTORY"

let DefaultState = {
    UserInfo: {
        firstName: "test",
        lastName: "test",
        phoneNumber: "+79781234567",
        street: "testStreet",
        apart: "21"
    },
    OrdersHistory: [
        {
            date: "11/09/2020",
            article: "419582142",
            status: "delivered",
            Items: [
                {
                    name: "Bacon pizza",
                    imgUrl: "https://i.ibb.co/tCTyZVs/bacon-pizza.jpg",
                    description: "bacon pizza description",
                    price: {USD: 8, EUR: 6.53},
                    id: 1,
                    count: 2
                },
                {
                    name: "Double pepperoni",
                    imgUrl: "https://i.ibb.co/tLvwXFF/double-pepperoni-pizza.jpg",
                    description: "Double pepperoni pizza description",
                    price: {USD: 11, EUR: 8.97},
                    id: 3,
                    count: 1
                },
                {
                    name: "Four cheese",
                    imgUrl: "https://i.ibb.co/KWthhLx/Four-Cheese.jpg",
                    description: "Four cheese pizza description",
                    price: {USD: 9.51, EUR: 7.76},
                    id: 4,
                    count: 2
                },
            ]
        },
        {
            date: "25/11/2020",
            article: "35325123",
            status: "delivered",
            Items: [
                {
                    name: "Peperoni pizza",
                    imgUrl: "https://i.ibb.co/yq9rGkw/Peperoni.jpg",
                    description: "Peperoni pizza description",
                    price: {USD: 7.51, EUR: 6.13},
                    id: 7,
                    count: 1
                },
                {
                    name: "Tomato pizza",
                    imgUrl: "https://i.ibb.co/fr9V2Rt/tomato-pizza.jpg",
                    description: "Tomato pizza description",
                    price: {USD: 8.55, EUR: 6.98},
                    id: 8,
                    count: 1
                },
                {
                    name: "Americano",
                    imgUrl: "https://i.ibb.co/GcN3ZyR/Americano.jpg",
                    description: "americano pizza description",
                    price: {USD: 9.12, EUR: 7.43},
                    id: 2,
                    count: 1
                }
            ]
        },
    ],
}

const GlobalReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_ORDER_HISTORY : {
            return {
                ...state,
                OrdersHistory: [...state.OrdersHistory, action.obj]
            }
        }
        case SET_USER_INFO: {
            return {
                ...state,
                UserInfo: action.userInfo
            }
        }
        default :
            return state
    }
}

export const AddToUserOrderHistory = (obj) => {
    return {type: ADD_ITEM_TO_ORDER_HISTORY, obj}
}

export const SetUserInfo = (userInfo) => {
    return {type: SET_USER_INFO, userInfo}
}
export default GlobalReducer