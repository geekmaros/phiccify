import React from "react";
import {connect} from 'react-redux'
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selector";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.style.sass'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
             cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })

//below using Selector for memoization
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown)