/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation }     from 'react-native-navigation'
import { Provider }       from 'react-redux'

import AuthScreen         from './src/screens/Auth/Auth'
import FindPlaceScreen    from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen  from './src/screens/PlaceDetail/PlaceDetail'
import SharePlaceScreen   from './src/screens/SharePlace/SharePlace'
import configureStore     from './src/store/configureStore'

// setup redux store
const store = configureStore()

// Register screens
Navigation.registerComponentWithRedux(
  'awesome-places.AuthScreen',
  () => AuthScreen,
  Provider,
  store
)
Navigation.registerComponentWithRedux(
  'awesome-places.FindPlaceScreen',
  () => FindPlaceScreen,
  Provider,
  store
)
Navigation.registerComponentWithRedux(
  'awesome-places.PlaceDetailScreen',
  () => PlaceDetailScreen,
  Provider,
  store
)
Navigation.registerComponentWithRedux(
  'awesome-places.SharePlaceScreen',
  () => SharePlaceScreen,
  Provider,
  store
)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name:       'awesome-places.AuthScreen',
            passProps: {
              text:     'stack with one child',
            },
            options: {
              topBar: {
                title: {
                  text: 'Login',
                },
              },
            },
          },
        }],
        options: {
          topBar: {
            visible:    true,
            background: {
              color:    'navy',
            },
            title: {
              fontSize: 20,
              color:    'white',
            }
          }
        }
      }
    }
  })
})
