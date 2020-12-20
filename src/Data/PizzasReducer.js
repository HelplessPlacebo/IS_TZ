

let DefaultState = {
    AvailableOrders : [
        {
            name : "Bacon pizza",
            imgUrl : "https://i.ibb.co/tCTyZVs/bacon-pizza.jpg",
            description : "bacon pizza description",
            price:{USD :8, EUR : 6.53},
            id : 1
        },
        {
            name : "Americano",
            imgUrl : "https://i.ibb.co/GcN3ZyR/Americano.jpg",
            description : "americano pizza description",
            price:{USD : 9.12, EUR : 7.43},
            id : 2
        },
        {
            name : "Double pepperoni",
            imgUrl : "https://i.ibb.co/tLvwXFF/double-pepperoni-pizza.jpg",
            description : "Double pepperoni pizza description",
            price:{USD : 11, EUR : 8.97},
            id : 3
        },
        {
            name : "Four cheese",
            imgUrl : "https://i.ibb.co/KWthhLx/Four-Cheese.jpg",
            description : "Four cheese pizza description",
            price:{USD : 9.51, EUR : 7.76},
            id : 4
        },
        {
            name : "Italian",
            imgUrl : "https://i.ibb.co/tmvKZbX/Italian.jpg",
            description : "Italian pizza description",
            price:{USD : 13.21, EUR : 10.78},
            id : 5
        },
        {
            name : "Mexican pizza",
            imgUrl : "https://i.ibb.co/09m9NZm/Mexican.jpg",
            description : "Mexican pizza description",
            price:{USD : 10, EUR : 8.16},
            id : 6
        },
        {
            name : "Peperoni pizza",
            imgUrl : "https://i.ibb.co/yq9rGkw/Peperoni.jpg",
            description : "Peperoni pizza description",
            price:{USD : 7.51, EUR : 6.13},
            id : 7
        },
        {
            name : "Tomato pizza",
            imgUrl : "https://i.ibb.co/fr9V2Rt/tomato-pizza.jpg",
            description : "Tomato pizza description",
            price:{USD : 8.55, EUR : 6.98},
            id : 8
        },
    ]
}

const GlobalReducer = (state = DefaultState, action) => {
    switch (action.type) {

        default :
            return state
    }
}

export default GlobalReducer