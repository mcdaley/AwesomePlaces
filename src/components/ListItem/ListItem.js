//-----------------------------------------------------------------------------
// src/components/ListItem/ListItem.js
//-----------------------------------------------------------------------------
import React          from 'react'
import { View, Text, StyleSheet } from 'react-native'

const listItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
)

export default listItem

const styles = StyleSheet.create({
  listItem: {
    width:              '100%',
    padding:            10,
    marginBottom:       5,
    backgroundColor:    '#eee',
  }
})
