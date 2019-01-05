//-----------------------------------------------------------------------------
// src/components/PickImage/PickImage.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Image,
  Button,
  StyleSheet}                 from 'react-native'

import imagePlaceholder     from '../../assets/beautiful-place.jpg'

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePlaceholder} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button
            title='Pick Image'
            onPress = {() => alert(`Pick an Image`)}
          />
        </View>
      </View>
    )
  }
}

export default PickImage

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
  previewImage: {
    width:              '100%',
    height:             '100%',
  },
  button: {
    margin:             8,
  }
})
