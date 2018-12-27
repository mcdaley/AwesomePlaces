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
import PlaceList           from './src/components/PlaceList/PlaceList'
//** import ListItem             from './src/components/ListItem/ListItem'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    places:     [],
  }

  placeSubmitHandler = (placeName) => {
    if(placeName.trim() === '') {
      return
    }

    this.setState(prevState => {
      return {
        places:   prevState.places.concat(placeName),
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceSubmit = {this.placeSubmitHandler} />
        <PlaceList  places        = {this.state.places} />
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
