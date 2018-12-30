//-----------------------------------------------------------------------------
// src/screens/SharePlace/SharePlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet }              from 'react-native'

class SharePlaceScreen extends Component {
  static get options() {
    return {
      topBar: {
        visible:    true,
        background: {
          color:    'yellow',
        },
        title: {
          text:     'Share Place',
          fontSize: 20,
          color:    'orange',
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>On SharePlace Screen</Text>
      </View>
    )
  }
}

export default SharePlaceScreen

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  }
})
