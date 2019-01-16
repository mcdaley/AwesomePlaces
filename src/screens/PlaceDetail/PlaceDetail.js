//-----------------------------------------------------------------------------
// src/components/PlaceDetail/PlaceDetail.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Navigation }       from 'react-native-navigation'
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  Platform,
  Dimensions,
  StyleSheet }              from 'react-native'
import Icon                 from 'react-native-vector-icons/Ionicons'
import MapView              from 'react-native-maps'

import { deletePlace }  from '../../store/actions/index'

class PlaceDetailScreen extends Component {
  constructor(props) {
    super(props)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    Navigation.pop(this.props.componentId)
  }

  render() {
    let focusedLocation = {
      latitude:       this.props.selectedPlace.location.latitude,
      longitude:      this.props.selectedPlace.location.longitude,
      latitudeDelta:  0.0122,
      longitudeDelta: 0.0421,
    }

    return(
      <View>
        <View style={styles.container}>
          <Image
            source  = {this.props.selectedPlace.image}
            style   = {styles.placeImage}
          />
          <MapView
            initialRegion = {focusedLocation}
            style         = {styles.map}
          >
            <MapView.Marker
              coordinate  = {this.props.selectedPlace.location}
            />
          </MapView>
          <Text style={styles.placeName}>
            {this.props.selectedPlace.name}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon
                size  = {30}
                name  = {Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                color = 'red'
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen)

const styles = StyleSheet.create({
  container: {
    margin:             40,
  },
  placeImage: {
    width:              '100%',
    height:             200,
  },
  map: {
    width:              '100%',
    height:             250,
  },
  placeName: {
    fontWeight:         'bold',
    textAlign:          'center',
    fontSize:           28,
  },
  deleteButton: {
    alignItems:         'center',
  }
})
