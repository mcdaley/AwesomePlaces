//-----------------------------------------------------------------------------
// src/components/UI/MainText/MainText.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  Text,
  StyleSheet }  from 'react-native'

const mainText = (props) => (
  <Text style={styles.mainText}>
    {props.children}
  </Text>
)

export default mainText

const styles = StyleSheet.create({
  mainText: {
    color:              '#000000',
    backgroundColor:    'transparent',
  }
})
