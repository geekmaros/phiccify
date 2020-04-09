import React from "react";
import {connect} from 'react-redux'
import {removeCartItem} from "../../redux/cart/cart.action";


import './cart-item.styles.sass'



const CartItem = ({item, removeItem}) => {
    const {imageUrl, name, quantity,price} = item
    return (

    <div className='cart-item'>
        <img src={imageUrl} alt={name}/>

        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}</span>

        </div>

       <div>
           <button className='remove-item' onClick={ () => removeItem(item) }>X</button>
       </div>
    </div>
)}
const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeCartItem(item))
})
export default connect(null, mapDispatchToProps)(CartItem)