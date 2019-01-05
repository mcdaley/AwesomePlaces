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
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
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
          <ButtonWithBackground  color='#29AAF4' onPress={() => alert('Hello')}>
            Switch to Sign In
          </ButtonWithBackground>
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
          <ButtonWithBackground color='#29AAF4' onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
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
