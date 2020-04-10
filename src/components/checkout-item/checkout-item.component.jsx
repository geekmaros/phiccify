import React from "react";
import {connect} from "react-redux";
import './checkout-item.styles.sass'
import {clearItemFromCart, addCartItem, removeCartItem} from "../../redux/cart/cart.action";




const CheckoutItem = ({cartItem, clearItem, increase, decrease}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return(
    <div className='checkout-item'>
    <div className="image-container">
       <img src={imageUrl} alt='item' />
    </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => decrease(cartItem)}>&#10094;</div>
            <span className='value'>{quantity} </span>
            <div className="arrow" onClick={() => increase(cartItem)} >&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    increase: item => dispatch(addCartItem(item)),
    decrease: item => dispatch(removeCartItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)