//-----------------------------------------------------------------------------
// src/screens/FindPlace/FindPlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { Navigation }       from 'react-native-navigation'
import { connect }          from 'react-redux'
import {
  View,
  Text,
  StyleSheet }              from 'react-native'

import PlaceList            from '../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
  /**
   * View place details
   */
  itemSelectedHandler = (key) => {
    const selPlace = this.props.places.find(place => {
      return place.key = key
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

  render() {
    return (
      <View style={styles.container}>
        <Text>On FindPlace Screen</Text>
        <PlaceList
          places          = {this.props.places}
          onItemSelected  = {this.itemSelectedHandler}
        />
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
