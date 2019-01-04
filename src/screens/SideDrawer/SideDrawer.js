//-----------------------------------------------------------------------------
// src/screens/SideDrawer/SideDrawer.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet }              from 'react-native'

class SideDrawerScreen extends Component {
  render() {
    return (
      <View style={[styles.container, {width: Dimensions.get('window').width * 0.8}]}>
        <Text>SideDrawer</Text>
      </View>
    )
  }
}

export default SideDrawerScreen

const styles = StyleSheet.create({
  container: {
    flex:             1,
    backgroundColor:  'white',
    justifyContent:   'center',
    alignItems:       'center',
  },
})
