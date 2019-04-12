import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>{this.props.title}</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  header: {
    backgroundColor: "#ecf0f1",
    paddingVertical: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  headerTitle: {
    color: "#e67e22",
    fontSize: 20,
    fontWeight: "600",
  }
})
