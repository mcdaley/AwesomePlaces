//-----------------------------------------------------------------------------
// src/components/UI/HeadingText/HeadingText.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  Text,
  StyleSheet }  from 'react-native'

const headingText = (props) => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
)

export default headingText


const styles = StyleSheet.create({
  textHeading: {
    fontSize:         28,
    fontWeight:       'bold',
  },
})
