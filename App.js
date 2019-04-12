import React, { Component } from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './src/screens/home'
import About from './src/screens/about'

export default class App extends Component{
  render() {
    return (
      <AppContainer />
    )
  }
}

const MainNavigation = createBottomTabNavigator({
  Home,
  About,
},{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(MainNavigation);
