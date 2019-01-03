//-----------------------------------------------------------------------------
// src/screens/SharePlace/SharePlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View,
  Text,
  StyleSheet }              from 'react-native'

import PlaceInput           from '../../components/PlaceInput/PlaceInput'
import { addPlace }         from '../../store/actions/index'

class SharePlaceScreen extends Component {

  placeAddedHandler = (placeName) => {
    if(placeName.trim() === '') {
      return
    }

    this.props.onAddPlace(placeName)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>On SharePlace Screen</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)

const styles = StyleSheet.create({
  container: {
    flex:             1,
    justifyContent:   'center',
    alignItems:       'center',
  }
})
