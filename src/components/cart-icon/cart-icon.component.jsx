import React from "react";
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cart.action";
import {ReactComponent as ShoppingIcon} from "../../assets/11.2 shopping-bag.svg.svg";
import {selectCartItemCount} from "../../redux/cart/cart.selector";
import './cart-icon.styles.sass'

const CartIcon = ({toggle, itemCount}) => (
    <div className='cart-icon' onClick={() => toggle()}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state)
})
const mapDispatchToProps = dispatch => ({
toggle: () => dispatch(toggleCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)