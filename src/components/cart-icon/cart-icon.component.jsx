import React from "react";
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cart.action";
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg";

import './cart-icon.styles.sass'

const CartIcon = ({toggle}) => (
    <div className='cart-icon' onClick={() => toggle()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
toggle: () => dispatch(toggleCart())
})
export default connect(null, mapDispatchToProps)(CartIcon)