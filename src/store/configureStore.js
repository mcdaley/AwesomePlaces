//-----------------------------------------------------------------------------
// src/store/configureStore.js
//-----------------------------------------------------------------------------
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware }   from 'redux'
import thunk          from 'redux-thunk'

import placesReducers from './reducers/places'
import uiReducers     from './reducers/ui'

const rootReducer = combineReducers({
  places: placesReducers,
  ui:     uiReducers,
})

let composeEnhancers = compose

if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configureStore
