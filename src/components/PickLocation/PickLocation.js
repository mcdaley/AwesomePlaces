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
      }
    }
  }

  /**
   *
   */
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion = {this.state.focusedLocation}
          style         = {styles.map}
        />
        <View style={styles.button}>
          <Button
            title   = 'Locate Me'
            onPress = {() => alert(`Pick location`)}
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
