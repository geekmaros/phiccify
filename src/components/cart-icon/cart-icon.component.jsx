import React from "react";
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cart.action";
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg";

import './cart-icon.styles.sass'

const CartIcon = ({toggle, itemCount}) => (
    <div className='cart-icon' onClick={() => toggle()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = ({cart: {cartItems}}) => ({
  itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity , 0)
})
const mapDispatchToProps = dispatch => ({
toggle: () => dispatch(toggleCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)