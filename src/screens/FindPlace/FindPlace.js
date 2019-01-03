//-----------------------------------------------------------------------------
// src/screens/FindPlace/FindPlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View,
  Text,
  StyleSheet }              from 'react-native'

import PlaceList            from '../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>On FindPlace Screen</Text>
        <PlaceList places={this.props.places} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
  }
}

export default connect(mapStateToProps, null)(FindPlaceScreen)

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  }
})
