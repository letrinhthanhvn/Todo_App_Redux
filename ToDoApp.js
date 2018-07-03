import React, { Component } from 'react';

import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';


 import App from './App'

 export default class ToDoApp extends Component {
     render() {
         return(
             <App />
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: 'green',
         justifyContent: 'center',
         alignItems: 'center'
     }
 })