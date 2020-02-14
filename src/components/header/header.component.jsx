import React from 'react'
import  './header.styles.sass'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import  { auth } from "../../firebase/firebase.utils";

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
                CART
            </Link>
        </div>
    </div>
)

export  default Header;