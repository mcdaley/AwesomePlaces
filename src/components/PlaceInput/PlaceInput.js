//-----------------------------------------------------------------------------
// src/components/PlaceInput/PlaceInput.js
//-----------------------------------------------------------------------------
import React, { Component }                     from 'react'
import { View, TextInput, Button, StyleSheet }  from 'react-native'

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

  placeSubmitHandler = () => {
    this.props.onPlaceAdded(this.state.placeName)

    this.setState({
      placeName:  '',
    })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style         = {styles.placeInput}
          placeholder   = "An awesome place"
          value         = {this.state.placeName}
          onChangeText  = {this.placeNameChangedHandler}
        />
        <Button
          title   = "Add"
          style   = {styles.placeButton}
          onPress = {this.placeSubmitHandler}
        />
      </View>
    )
  }
}

styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection:      "row",
    width:              "100%",
    justifyContent:     "space-between",
    alignItems:         "center",
  },
  placeInput: {
    width:              "80%",
  },
  placeButton: {
    width:              "20%",
  }
})
