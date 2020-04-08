import {cartTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const CartSate = {
    showCart: false,
    cartItems: []
}

const cartReducer = (state = CartSate, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART:
            return{
                ...state,
                showCart: !state.showCart
            };
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                    //[...state.cartItems, action.payload]
            };


        default:
            return state
    }
}

export default cartReducer