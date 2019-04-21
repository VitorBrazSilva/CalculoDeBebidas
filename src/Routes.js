import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation'

import Home from './screens/home'
import About from './screens/about'
import Login from './screens/login'

const Routes = createStackNavigator(
    {
        Login: createStackNavigator({
            Login,
        },
            {
                headerMode: "none",
                navigationOptions: {
                    transitionConfig: () => defaultTransaction(),
                }
            }),
        Main: createBottomTabNavigator({
            Home,
            About
        },
        {
            headerMode: "none",
        })
    },
    {  
        headerMode: "none",
        navigationOptions: {
            transitionConfig: () => defaultTransaction(),
        }
    }
)


export default createAppContainer(Routes)