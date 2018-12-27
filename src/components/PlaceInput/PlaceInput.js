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
    this.props.onPlaceSubmit(this.state.placeName)

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
    //** flex:               1,
    flexDirection:      'row',
    width:              '100%',
    justifyContent:     'space-between',
    alignItems:         'center',
    marginBottom:       5,
    //** marginTop:          50,
  },
  placeInput: {
    width:              '70%',
    borderBottomColor:  'black',
    borderBottomWidth:  1,
  },
  placeButton: {
    width:              '30%',
  },
})
