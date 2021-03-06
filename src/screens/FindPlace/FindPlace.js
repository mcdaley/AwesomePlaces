//-----------------------------------------------------------------------------
// src/screens/FindPlace/FindPlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { Navigation }       from 'react-native-navigation'
import { connect }          from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet }              from 'react-native'

import PlaceList            from '../../components/PlaceList/PlaceList'
import { getPlaces }        from '../../store/actions/index'

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leftSideDrawerVisible:  false,
      placesLoaded:           false,
      removeAnim:             new Animated.Value(1)
    }

    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.props.onLoadPlaces()
  }

  /**
   * Handle the clicking of the hamburger icon in the menu
   */
  navigationButtonPressed({ buttonId }) {
    if(buttonId === 'sideDrawerToggleBtn') {
      Navigation.mergeOptions('awesome-places.SideDrawerScreen.ID', {
        sideMenu: {
          left: {
            visible: !this.state.leftSideDrawerVisible,
          }
        }
      })

      this.setState({
        leftSideDrawerVisible: !this.state.leftSideDrawerVisible,
      })
    }
  }

  /**
   * View place details
   */
  itemSelectedHandler = (key) => {
    const selPlace = this.props.places.find(place => {
      return place.key === key
    })

    Navigation.push(this.props.componentId, {
      component: {
        name:      'awesome-places.PlaceDetailScreen',
        passProps: {
          selectedPlace: selPlace,
        },
        options: {
          topBar: {
            title: {
              text:     selPlace.name,
              fontSize: 20,
              color:    'white'
            },
            background: {
              color:    'navy',
            },
          },
        },
      }
    })
  }

  placesSearchHandler = () => {
    Animated.timing(
      this.state.removeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }
    ).start()

    this.setState({
      placesLoaded:   true,
    })
  }

  render() {
    let content = (
      <Animated.View
        style = {{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange:   [0, 1],
                outputRange:  [12, 1],
              })
            }
          ],
        }}
      >
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>
              Find Places
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    )

    if(this.state.placesLoaded) {
      content = (
        <PlaceList
          places          = {this.props.places}
          onItemSelected  = {this.itemSelectedHandler}
        />
      )
    }

    return (
      <View
        style = {this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    )
  }
}

// Setup Redux
const mapStateToProps = (state) => {
  return {
    places: state.places.places,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPlaces: () => dispatch(getPlaces())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen)

// Define Styles
const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  },
  buttonContainer: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  },
  listContainer: {

  },
  searchButton: {
    borderColor:      'orange',
    borderWidth:      3,
    borderRadius:     50,
    padding:          20,
  },
  searchButtonText: {
    color:            'orange',
    fontWeight:       'bold',
    fontSize:         26,
  },
})
