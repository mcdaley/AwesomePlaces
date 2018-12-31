/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation }     from 'react-native-navigation'

import AuthScreen         from './src/screens/Auth/Auth'
import FindPlaceScreen    from './src/screens/FindPlace/FindPlace'
import SharePlaceScreen   from './src/screens/SharePlace/SharePlace'

// Register screens
Navigation.registerComponent('awesome-places.AuthScreen',       () => AuthScreen)
Navigation.registerComponent('awesome-places.FindPlaceScreen',  () => FindPlaceScreen)
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen)

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
          },
          options: {
            topBar: {
              visible:    true,
              background: {
                color:    'navy'
              },
              title: {
                title:    'Sign In',
                fontSize: 20,
                color:    'white'
              }
            }
          }
        }],
      }
    }
  })
})
