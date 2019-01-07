//-----------------------------------------------------------------------------
// src/components/PlaceInput/PlaceInput.js
//-----------------------------------------------------------------------------
import React, { Component }                     from 'react'
import { View, TextInput, Button, StyleSheet }  from 'react-native'

import DefaultInput           from '../UI/DefaultInput/DefaultInput'

export default class PlaceInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DefaultInput
        placeholder   = 'Place Name'
        value         = {this.props.placeName}
        onChangeText  = {this.props.onChangeText}
      />
    )
  }
}
