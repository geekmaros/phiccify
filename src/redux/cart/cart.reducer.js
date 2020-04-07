import {cartTypes} from "./cart.types";

const CartSate = {
    isCartOn: false,
    cartItems: []
}

const cartReducer = (state = CartSate, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART:
            return{
                ...state,
                isCartOn: !state.isCartOn
            };
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };


        default:
            return state
    }
}

export default cartReducer