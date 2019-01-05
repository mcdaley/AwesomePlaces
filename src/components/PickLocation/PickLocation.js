//-----------------------------------------------------------------------------
// src/components/PickLocation/PickLocation.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet}                 from 'react-native'

import imagePlaceholder     from '../../assets/beautiful-place.jpg'

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
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
