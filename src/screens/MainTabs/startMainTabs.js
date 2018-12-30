//-----------------------------------------------------------------------------
// src/screens/MainTabs/startMainTabs.js
//-----------------------------------------------------------------------------
import { Navigation } from 'react-native-navigation'
import Icon           from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            topBar: {
              visible:    true,
              drawBehind: false,
              animate:    false,
              background: {
                color:    'blue',
              }
            }
          },
          children: [
            {
              component: {
                name: 'awesome-places.FindPlaceScreen',
                options: {
                  topBar: {
                    title: {
                      text:     'Find Place',
                      fontSize: 20,
                      color:    'white'
                    },
                  },
                  bottomTab: {
                    text:     'Find Place',
                    icon:     sources[0],
                  },
                }
              }
            },
            {
              component: {
                name: 'awesome-places.SharePlaceScreen',
                options: {
                  topBar: {
                    title: {
                      text:     'Share Place',
                      fontSize: 20,
                      color:    'white'
                    },
                  },
                  bottomTab: {
                    text:     'Share Place',
                    icon:     sources[1],
                  }
                }
              }
            }
          ]
        }
      }
    })
  })
}

export default startMainTabs
