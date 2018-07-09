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

import store from './src/redux/store'

import { Provider } from 'react-redux'

import Main from './src/components/Main'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

// defaultState

