//-----------------------------------------------------------------------------
// src/components/PlaceInput/PlaceInput.js
//-----------------------------------------------------------------------------
import React, { Component }                     from 'react'
import { View, TextInput, Button, StyleSheet }  from 'react-native'

import DefaultInput           from '../UI/DefaultInput/DefaultInput'
export default class PlaceInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeName:  '',
    }
  }

  placeNameChangedHandler = (text) => {
    this.setState({
      placeName:  text,
    })
  }

  /**************************
      placeSubmitHandler = () => {
        this.props.onPlaceAdded(this.state.placeName)

        this.setState({
          placeName:  '',
        })
      }
  ***************************/

  render() {
    return (
      <DefaultInput
        placeholder   = 'Place Name'
        value         = {this.state.placeName}
        onChangeText  = {this.placeNameChangedHandler}
      />
    )
  }
}
