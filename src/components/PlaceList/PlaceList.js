//-----------------------------------------------------------------------------
// src/components/PlaceList/PlaceList.js
//-----------------------------------------------------------------------------
import React                from 'react'
import { View, StyleSheet } from 'react-native'

import ListItem   from '../ListItem/ListItem'

const placeList = (props) => {
  const placesOutput = props.places.map( (place, i) => {
    return (<ListItem key={i} placeName={place} />)
  })

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  )
}

export default placeList

styles = StyleSheet.create({
  listContainer: {
    width:              "100%",
  },
})
