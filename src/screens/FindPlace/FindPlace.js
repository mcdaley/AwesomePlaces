//-----------------------------------------------------------------------------
// src/screens/FindPlace/FindPlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet }              from 'react-native'

class FindPlaceScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>On FindPlace Screen</Text>
      </View>
    )
  }
}

export default FindPlaceScreen

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  }
})
