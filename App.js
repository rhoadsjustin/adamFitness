/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Login from './screens/Login';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  }
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component { 
    render() {
      return <AppContainer /> ;
    }
};




