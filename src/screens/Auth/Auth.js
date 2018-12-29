//-----------------------------------------------------------------------------
// src/screens/Auth/Auth.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet}               from 'react-native'

class AuthScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

export default AuthScreen
