/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect }          from 'react-redux'
import {
  Platform,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View }                    from 'react-native';

import PlaceInput           from './src/components/PlaceInput/PlaceInput'
import PlaceList            from './src/components/PlaceList/PlaceList'
import PlaceDetail          from './src/components/PlaceDetail/PlaceDetail'

import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace }           from './src/store/actions/index'

import placeImage           from './src/assets/Machu_Pichu.jpg'

/**
 *
 */
type Props = {};
class App extends Component<Props> {

  placeAddedHandler = (placeName) => {
    if(placeName.trim() === '') {
      return
    }

    this.props.onAddPlace(placeName)
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace = {this.props.selectedPlace}
          onItemDeleted = {this.placeDeletedHandler}
          onModalClosed = {this.modalClosedHandler}
        />
        <PlaceInput
          onPlaceAdded  = {this.placeAddedHandler}
        />
        <PlaceList
          places          = {this.props.places}
          onItemSelected  = {this.placeSelectedHandler}
        />
      </View>
    );
  }
}

// Connect app to redux store

const mapStateToProps = (state) => {
  return {
    places:         state.places.places,
    selectedPlace:  state.places.selectedPlace,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace:       (name)  => dispatch(addPlace(name)),
    onDeletePlace:    ()      => dispatch(deletePlace()),
    onSelectPlace:    (key)   => dispatch(selectPlace(key)),
    onDeselectPlace:  ()      => dispatch(deselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex:               1,
    padding:            26,
    backgroundColor:    "#fff",
    alignItems:         "center",
    justifyContent:     "flex-start"
  }
});
