import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import MySaga from './AppRedux/Saga/saga'
import Reducer from './AppRedux/Reducer/reducer'
import { Provider } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const  sagaMiddleWare = createSagaMiddleWare()
const store = createStore(Reducer,applyMiddleware(sagaMiddleWare)) ;

//sagaMiddleWare.run(MySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

