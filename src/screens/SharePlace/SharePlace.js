//-----------------------------------------------------------------------------
// src/screens/SharePlace/SharePlace.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet }              from 'react-native'

import { addPlace }         from '../../store/actions/index'
import HeadingText          from '../../components/UI/HeadingText/HeadingText'
import MainText             from '../../components/UI/MainText/MainText'
import PlaceInput           from '../../components/PlaceInput/PlaceInput'
import PickImage            from '../../components/PickImage/PickImage'
import PickLocation         from '../../components/PickLocation/PickLocation'

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeName:  '',
    }
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val,
    })
  }

  placeAddedHandler = () => {
    if(this.state.placeName.trim() === '') {
      return
    }

    this.props.onAddPlace(this.state.placeName)
    this.setState({
      placeName: '',
    })
  }

  render() {
    return (
      <ScrollView>
        <View  style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName     = {this.state.placeName}
            onChangeText  = {this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button
              title   = 'Share a Place'
              onPress = {this.placeAddedHandler}
            />
          </View>
          {/* <PlaceInput onPlaceAdded={this.placeAddedHandler} /> */}
        </View>
      </ScrollView>
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
    flex:               1,
    justifyContent:     'center',
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
  },
})
