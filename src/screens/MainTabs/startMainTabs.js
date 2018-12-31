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
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'awesome-places.FindPlaceScreen',
                      options: {
                        topBar: {
                          visible:    true,
                          title: {
                            text:     'Find Place',
                            fontSize: 20,
                            color:    'white'
                          },
                          background: {
                            color:    'navy',
                          },
                        },
                        bottomTab: {
                          text:     'Find Place',
                          icon:     sources[0],
                        },
                      }
                    }
                  },
                ]
              },
            },
            {
              component: {
                name: 'awesome-places.SharePlaceScreen',
                options: {  
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
