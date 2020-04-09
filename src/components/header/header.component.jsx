import React from 'react'
import  './header.styles.sass'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import CartIcon from "../cart-icon/cart-icon.component";
import  { auth } from "../../firebase/firebase.utils";
import {toggleCart} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";


const Header = ({currentUser, showCart}) => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
               {
                   currentUser ?
                       <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div> :
                       <Link className='option' to='/sign-in'>SIGN IN</Link>
               }

            <Link className="option" to='/cart'>
                CONTACT
            </Link>

            <CartIcon  />
        </div>
        {

            showCart ? <CartDropDown/> : ''

        }

    </div>
)


//the state was destructured as shown below to users and cart
// const mapStateToProps = ({user: {currentUser},cart: {showCart}}) => ({
//     currentUser,
//     showCart
// })

//mapstate below using reselect library for memoization
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    showCart: toggleCart
})
const mapDispatchToProps = dispatch =>({

})
export  default connect(mapStateToProps, mapDispatchToProps)(Header);