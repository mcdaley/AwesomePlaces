//-----------------------------------------------------------------------------
// src/screens/Auth/Auth.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View,
  Text,
  Button,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet }              from 'react-native'

import startMainTabs        from '../MainTabs/startMainTabs'
import MainText             from '../../components/UI/MainText/MainText'
import HeadingText          from '../../components/UI/HeadingText/HeadingText'
import DefaultInput         from '../../components/UI/DefaultInput/DefaultInput'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
import backgroundImage      from '../../assets/background.jpg'
import validate             from '../../utility/validation'
import { tryAuth }          from '../../store/actions/index'

class AuthScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewMode: Dimensions.get('window').height > 400 ? 'portrait' : 'landscape',
      authMode: 'login',
      controls: {
        email: {
          value:    'marv@bills.com',
          valid:    false,
          touched:  false,
          validationRules: {
            isEmail:  true,
          }
        },
        password: {
          value:    'password123',
          valid:    false,
          touched:  false,
          validationRules: {
            minLength:  6,
          }
        },
        confirmPassword: {
          value:    'password123',
          valid:    false,
          touched:  false,
          validationRules: {
            equalTo:  'password',
          }
        },
      }
    }

    Dimensions.addEventListener('change', this.updateStyles)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles)
  }

  switchAuthModeHandler = () => {
    this.setState( (prevState) => {
      return {
        authMode: prevState.authMode === 'login' ? 'signup' : 'login'
      }
    })
  }

  updateStyles = () => {
    this.setState({
      viewMode: Dimensions.get('window').height > 400 ? 'portrait' : 'landscape'
    })
  }

  loginHandler = () => {
    const authData = {
      email:    this.state.controls.email.value,
      password: this.state.controls.password.value
    }
    this.props.onLogin(authData)
    startMainTabs()
  }

  updateInputState = (key, value) => {
    let connectedValue = {}
    if(this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo
      const equalValue   = this.state.controls[equalControl].value
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue,
      }
    }

    this.setState(prevState => {
      return {
        ...prevState,
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value:    value,
            valid:    validate(value, prevState.controls[key].validationRules, connectedValue),
            touched:  true,
          }
        }
      }
    })
  }

  render() {
    let headingText             = null
    let confirmPasswordControl  = null

    if(this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <HeadingText>
            Please Sign In
          </HeadingText>
        </MainText>
      )
    }

    if(this.state.authMode === 'signup') {
      confirmPasswordControl = (
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
            value        = {this.state.controls.confirmPassword.value}
            onChangeText = {(val) => this.updateInputState('confirmPassword', val)}
            valid        = {this.state.controls.confirmPassword.valid}
            touched      = {this.state.controls.confirmPassword.touched}
            secureTextEntry
          />
        </View>
      )
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          {headingText}
          <ButtonWithBackground
            color   = '#29AAF4'
            onPress = {this.switchAuthModeHandler}
          >
            Switch to {this.state.authMode === 'login' ? 'Sign Up' : 'Login'}
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder     = 'Email address'
              style           = {styles.input}
              value           = {this.state.controls.email.value}
              onChangeText    = {(val) => this.updateInputState('email', val)}
              valid           = {this.state.controls.email.valid}
              touched         = {this.state.controls.email.touched}
              autoCapitalize  = 'none'
              autoCorrect     = {false}
              keyboardType    = 'email-address'
            />
            <View
              style = {
                this.state.viewMode === 'portrait' || this.state.authMode === 'login'
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
                  placeholder  = 'Password'
                  style        = {styles.input}
                  value        = {this.state.controls.password.value}
                  onChangeText = {(val) => this.updateInputState('password', val)}
                  valid        = {this.state.controls.password.valid}
                  touched      = {this.state.controls.password.touched}
                  secureTextEntry
                />
              </View>
              {confirmPasswordControl}
            </View>
          </View>
          <ButtonWithBackground
            color     = '#29AAF4'
            onPress   = {this.loginHandler}
            disabled  = {
              !this.state.controls.email.valid     ||
              !this.state.controls.password.valid  ||
              !this.state.controls.confirmPassword.valid && this.state.authMode === 'signup'
            }
          >
            Submit
          </ButtonWithBackground>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

// Connect to redux and export
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (authData) => dispatch(tryAuth(authData))
  }
}

export default connect(null, mapDispatchToProps)(AuthScreen)

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
