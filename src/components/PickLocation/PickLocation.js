//-----------------------------------------------------------------------------
// src/components/PickLocation/PickLocation.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Image,
  Button,
  Dimensions,
  StyleSheet }                from 'react-native'
import MapView                from 'react-native-maps'

import imagePlaceholder     from '../../assets/beautiful-place.jpg'

class PickLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedLocation: {
        latitude:       37.7900352,
        longitude:      -122.4013726,
        latitudeDelta:  0.0122,
        longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
      },
      locationChosen: false,
    }
  }

  pickLocationHandler = (event) => {
    const coords = event.nativeEvent.coordinate

    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude:   coords.latitude,
      longitude:  coords.longitude
    })

    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude:   coords.latitude,
          longitude:  coords.longitude,
        },
        locationChosen: true,
      }
    })

    // Call the SharePlace locationPickHandler
    this.props.onPickLocation({
      latitude:   coords.latitude,
      longitude:  coords.longitude,
    })
  }

  /**
   * Get the user's current location and then re-use the
   * pickLocationHandler() to map the user's location by creating an
   * object that has the same properties of the event.reactNative
   * passed to the pickLocationHandler
   */
  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude:   pos.coords.latitude,
            longitude:  pos.coords.longitude,
          }
        }
      }

      this.pickLocationHandler(coordsEvent)
    },
    err => {
      console.log(`Error: `, err)
      alert(`Fetching the Position failed, please pick one manually`)
    })
  }

  /**
   *
   */
  render() {
    let marker = null

    if(this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }

    return (
      <View style={styles.container}>
        <MapView
          initialRegion = {this.state.focusedLocation}
          style         = {styles.map}
          onPress       = {this.pickLocationHandler}
          ref           = {ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button
            title   = 'Locate Me'
            onPress = {this.getLocationHandler}
          />
        </View>
      </View>
    )
  }
}

export default PickLocation

const styles = StyleSheet.create({
  container: {
    width:              '100%',
    alignItems:         'center',
  },
  map: {
    width:              '100%',
    height:             250,
  },
  placeholder: {
    borderWidth:        1,
    borderColor:        '#000000',
    backgroundColor:    '#EEEEEE',
    width:              '80%',
    height:             150,
  },
  button: {
    margin:             8,
  },
})
