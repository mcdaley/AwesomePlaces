//-----------------------------------------------------------------------------
// src/screens/MainTabs/startMainTabs.js
//-----------------------------------------------------------------------------
import { Navigation } from 'react-native-navigation'
import Icon           from 'react-native-vector-icons/Ionicons'
import { Platform }   from 'react-native'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : "ios-share", 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id:   'awesome-places.SideDrawerScreen.ID',
              name: 'awesome-places.SideDrawerScreen',
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          id:   'awesome-places.FindPlaceScreen.ID',
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
                              leftButtons: [
                                {
                                  id:    'sideDrawerToggleBtn',
                                  icon:  sources[2],
                                  color: 'white',
                                }
                              ],
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
        }
      }
    })
  })
}

export default startMainTabs
