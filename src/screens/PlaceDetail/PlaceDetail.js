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
  StyleSheet }              from 'react-native'
import Icon                 from 'react-native-vector-icons/Ionicons'

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
    return(
      <View>
        <View style={styles.container}>
          <Image
            source  = {this.props.selectedPlace.image}
            style   = {styles.placeImage}
          />
          <Text style={styles.placeName}>
            {this.props.selectedPlace.name}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
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
  placeName: {
    fontWeight:         'bold',
    textAlign:          'center',
    fontSize:           28,
  },
  deleteButton: {
    alignItems:         'center',
  }
})
