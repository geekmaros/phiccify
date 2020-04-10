import {cartTypes} from "./cart.types";

export const toggleCart = () => ({
    type: cartTypes.TOGGLE_CART
})

export const addCartItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

export const removeCartItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
})


export const clearItemFromCart = item => ({
    type: cartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

