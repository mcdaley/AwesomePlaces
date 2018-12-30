//-----------------------------------------------------------------------------
// src/screens/MainTabs/startMainTabs.js
//-----------------------------------------------------------------------------
import { Navigation } from 'react-native-navigation'

const startMainTabs = () => {
  Navigation.setRoot({
    root: {
      component: {
          name: 'awesome-places.FindPlaceScreen',
      },
      bottomTabs: {
        currentTabIndex: 1,
        children: [
          {
            component: {
              name: 'awesome-places.FindPlaceScreen',
              options: {
                title: {
                  text:     'Find Place',
                  fontSize: 20,
                  color:    'blue'
                },
                bottomTab: {
                  text:     'Find Place'
                }
              }
            }
          },
          {
            component: {
              name: 'awesome-places.SharePlaceScreen',
              options: {
                title: {
                  text:     'Share Place',
                  fontSize: 20,
                  color:    'purple'
                },
                bottomTab: {
                  text:     'Share Place'
                }
              }
            }
          }
        ]
      }
    }
  })
}

export default startMainTabs
