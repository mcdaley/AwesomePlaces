//-----------------------------------------------------------------------------
// src/screens/Auth/Auth.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet }              from 'react-native'

import startMainTabs        from '../MainTabs/startMainTabs'
import HeadingText          from '../../components/UI/HeadingText/HeadingText'
import DefaultInput         from '../../components/UI/DefaultInput/DefaultInput'

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
        <HeadingText>
          Please Sign In
        </HeadingText>
        <Button title='Switch to Sign In' />
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder = 'Email address'
            style       = {styles.input}
          />
          <DefaultInput
            placeholder = 'Password'
            style       = {styles.input}
          />
          <DefaultInput
            placeholder = 'Confirm password'
            style       = {styles.input}
          />
        </View>
        <Button title='Submit' onPress={this.loginHandler} />
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
  },
  textHeading: {
    fontSize:         28,
    fontWeight:       'bold',
  },
  inputContainer: {
    width:            '80%',
  },
  input: {
    backgroundColor:  '#EEEEEE',
    borderColor:      '#BBBBBB',
  }
})
