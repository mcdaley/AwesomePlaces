/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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

import placeImage           from './src/assets/Machu_Pichu.jpg'

/**
 *
 */
type Props = {};
export default class App extends Component<Props> {
  state = {
    places:         [],
    selectedPlace:  null,
  }

  placeAddedHandler = (placeName) => {
    if(placeName.trim() === '') {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key:    Math.random(),
          name:   placeName,
          image:  placeImage
        }),
      }
    })
  }

  placeSelectedHandler = (key) => {
    this.setState( prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter( (place) => place.key !== prevState.selectedPlace.key),
        selectedPlace: null,
      }
    })
    /**
    this.setState(prevState => {
      return {
        places: prevState.places.filter( (place, i) => {
          return i !== index
        })
      }
    })
    **/
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace = {this.state.selectedPlace}
          onItemDeleted = {this.placeDeletedHandler}
          onModalClosed = {this.modalClosedHandler}
        />
        <PlaceInput
          onPlaceAdded  = {this.placeAddedHandler}
        />
        <PlaceList
          places          = {this.state.places}
          onItemSelected  = {this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:               1,
    padding:            26,
    backgroundColor:    "#fff",
    alignItems:         "center",
    justifyContent:     "flex-start"
  }
});
