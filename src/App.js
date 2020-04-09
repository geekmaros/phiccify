import React, {Component} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom'
import  {connect} from 'react-redux'
import './App.sass';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.action'
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";

require('dotenv').config()


class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         currentUser: null
    //     }
    // }
    unsubscribeFromAuth = null
    componentDidMount() {

        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            // this.setState({currentUser: user})
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth)


                //onSnapshot fires when a data is created in Database
                userRef.onSnapshot(snapshot => {
                    console.log(snapshot)
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data() //the .data() is from the onSnapShot
                    })
                })

            }

            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {

        return (
            <div className='App Fade'>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/shop" component={ShopPage}/>
                    <Route  path="/checkout" component={CheckoutPage}/>
                    <Route  path="/sign-in"  render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) } />

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch  => ({
 setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
