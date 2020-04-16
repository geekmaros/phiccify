import { createStore, applyMiddleware, compose} from "redux";
import {persistStore} from "redux-persist";// this helps us persist or keep data even on reload
import rootReducer from './root-reducer'
import logger from 'redux-logger'

const middlewares = [logger]
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)))
export const persistor = persistStore(store)

export default {store, persistor  }