//-----------------------------------------------------------------------------
// src/components/UI/DefaultInput/DefaultInput.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  TextInput,
  StyleSheet }  from 'react-native'

const defaultInput = (props) => (
  <TextInput
    {...props}
    underlineColorAndroid = 'transparent'
    style = {[styles.input, props.style]}
  />
)

export default defaultInput

const styles = StyleSheet.create({
  input: {
    width:              '100%',
    borderWidth:        1,
    borderColor:        '#EEEEEE',
    padding:            5,
    margin:             8,
  }
})
