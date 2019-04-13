import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class About extends Component {

  static navigationOptions = {
    title: 'About',
  }

  render() {
    return (
      <View>
        <Text>About</Text>
      </View>
    );
  }
}
