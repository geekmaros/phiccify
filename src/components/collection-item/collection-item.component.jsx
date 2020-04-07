import React from 'react'
import {connect} from 'react-redux'
import CustomButton from "../custom-button/custom-button.component";
import {addCartItem} from "../../redux/cart/cart.action";
import './collection-item.styles.sass'

const CollectionItem = (({ item, addToCart}) => {
    const {id, name, price, imageUrl} = item
    return (
        <div className='collection-item'>
            <div className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
           />


            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={ () => addToCart(item) }>Add To Cart</CustomButton>
        </div>
    )}
)
const mapDispatchToProps = dispatch => ({
addToCart: item => dispatch(addCartItem(item))
})
export default connect(null, mapDispatchToProps) (CollectionItem)