/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text } from 'native-base';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import WorkoutScreen from './screens/WorkoutScreen';
import ResultScreen from './screens/Results';
import NutritionScreen from './screens/Nutrition';

const HomeTabNavigator = createBottomTabNavigator({
  Workouts: {
    screen: WorkoutScreen,
    headerMode: 'none',
  },
  Results: {
    screen: ResultScreen,
    headerMode: 'none',
  },
  Nutrition: {
    screen: NutritionScreen,
    headerMode: 'none',
  }
})
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeTabNavigator,
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: Login,
    headerMode: 'none',
  }
}, {
  initialRouteName: "Login",

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component { 
    render() {
      return <AppContainer />;
    }
};




