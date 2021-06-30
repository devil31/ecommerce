
import React from 'react';
import Navigation from './Navigation'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './store/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
       <Navigation/>
    </Provider>
  
  );
}


