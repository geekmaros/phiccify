import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from './root-reducer'
import logger from 'redux-logger'

const middlewares = [logger]
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)))

export default store