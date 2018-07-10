/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated']

// import store from './src/redux/reducers/store'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import  allReducers  from './src/redux/reducers/index'
import MainContainer from './src/redux/container/MainContainer';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/reduxSagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}


// defaultState

