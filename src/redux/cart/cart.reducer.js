import {cartTypes} from "./cart.types";

const CartSate = {
    isCartOn: false
}

const cartReducer = (state = CartSate, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART:
            return{
                ...state,
                isCartOn: !state.isCartOn
            }
        default:
            return state
    }
}

export default cartReducer