/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation'

import AuthScreen     from './src/screens/Auth/Auth'

// Register screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen)

// Start App - v2
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name:       'awesome-places.AuthScreen',
            passProps: {
              text:     'stack with one child',
            }
          }
        }],
        options: {
          topBar: {
            title: {
              text: 'Login'
            }
          }
        }
      }
    }
  })
})
