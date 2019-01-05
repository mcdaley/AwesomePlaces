//-----------------------------------------------------------------------------
// src/screens/Auth/Auth.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet }              from 'react-native'

import startMainTabs        from '../MainTabs/startMainTabs'
import MainText             from '../../components/UI/MainText/MainText'
import HeadingText          from '../../components/UI/HeadingText/HeadingText'
import DefaultInput         from '../../components/UI/DefaultInput/DefaultInput'
import backgroundImage      from '../../assets/background.jpg'

class AuthScreen extends Component {
  constructor(props) {
    super(props)
  }

  loginHandler = () => {
    startMainTabs()
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>
              Please Sign In
            </HeadingText>
          </MainText>
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
      </ImageBackground>
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
  backgroundImage: {
    flex:             1,
    width:            '100%',
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
