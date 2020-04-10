import {cartTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";
import {removeItemFromCart} from "./cart.utils";


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
        case  cartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:  removeItemFromCart(state.cartItems, action.payload)
            }
        case cartTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer