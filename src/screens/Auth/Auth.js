//-----------------------------------------------------------------------------
// src/screens/Auth/Auth.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet}               from 'react-native'

import startMainTabs        from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
  constructor(props) {
    super(props)
  }

  loginHandler = () => {
    startMainTabs()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
        <Text>{this.props.text}</Text>
        <Button title='Sign In' onPress={this.loginHandler} />
      </View>
    )
  }
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  }
})
