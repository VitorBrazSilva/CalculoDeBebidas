import React, { Component } from 'react'
import { createAppContainer, createBottomTabNavigator,createStackNavigator } from 'react-navigation';

import Home from './src/screens/home'
import About from './src/screens/about'
import Login from './src/screens/login'

export default class App extends Component{
  render() {
    return (
      <AppContainer />
    )
  }
}

const MainNavigation = createStackNavigator({  
  Home,
  Login,
},{
  initialRouteName: 'Login'
});


const AppContainer = createAppContainer(MainNavigation);
