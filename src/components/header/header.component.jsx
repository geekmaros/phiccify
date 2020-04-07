import React from 'react'
import  './header.styles.sass'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import CartIcon from "../cart-icon/cart-icon.component";
import  { auth } from "../../firebase/firebase.utils";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser}) => (
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

                <CartIcon/>
        </div>
        <CartDropDown/>
    </div>
)
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export  default connect(mapStateToProps)(Header);