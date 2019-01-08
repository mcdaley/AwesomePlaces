//-----------------------------------------------------------------------------
// src/screens/Auth/Auth.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ImageBackground,
  Dimensions,
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

    this.state = {
      viewMode: Dimensions.get('window').height > 400 ? 'portrait' : 'landscape'
    }

    Dimensions.addEventListener('change', this.updateStyles)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles)
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode: dims.get('window').height > 400 ? 'portrait' : 'landscape'
    })
  }

  loginHandler = () => {
    startMainTabs()
  }

  render() {
    let headingText = null

    if(this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <HeadingText>
            Please Sign In
          </HeadingText>
        </MainText>
      )
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground  color='#29AAF4' onPress={() => alert('Hello')}>
            Switch to Sign In
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder = 'Email address'
              style       = {styles.input}
            />
            <View
              style = {
                this.state.viewMode === 'portrait'
                ? styles.portraitPasswordContainer
                : styles.landscapePasswordContainer
              }
            >
              <View
                style = {
                  this.state.viewMode === 'portrait'
                  ? styles.portraitPasswordWrapper
                  : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder = 'Password'
                  style       = {styles.input}
                />
              </View>
              <View
                style = {
                  this.state.viewMode === 'portrait'
                  ? styles.portraitPasswordWrapper
                  : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder = 'Confirm password'
                  style       = {styles.input}
                />
              </View>
            </View>
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
  },
  portraitPasswordContainer: {
    flexDirection:    'column',
    justifyContent:   'flex-start',
  },
  landscapePasswordContainer: {
    flexDirection:    'row',
    justifyContent:   'space-between',
  },
  portraitPasswordWrapper: {
    width:            '100%',
  },
  landscapePasswordWrapper: {
    width:            '45%',
  }
})
