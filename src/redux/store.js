  
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
const middlewares=[thunk];
middlewares.push(logger)

 const store=createStore(rootReducer,applyMiddleware(...middlewares))



 export  default store