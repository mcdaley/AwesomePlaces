//-----------------------------------------------------------------------------
// src/components/PlaceList/PlaceList.js
//-----------------------------------------------------------------------------
import React                      from 'react'
import { FlatList, StyleSheet }   from 'react-native'

import ListItem   from '../ListItem/ListItem'

const placeList = (props) => {
  const placesOutput = props.places.map( (place, i) => {
    return (
      <ListItem
        key           = {i + 1}
        placeName     = {place}
        onItemPressed = {() => props.onItemDeleted(i)}
      />
    )
  })

  return (
    <FlatList
      style       = {styles.listContainer}
      data        = {props.places}
      renderItem  = { (info) => (
        <ListItem
          placeName     = {info.item.name}
          placeImage    = {info.item.image}
          onItemPressed = {() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  )
}

export default placeList

styles = StyleSheet.create({
  listContainer: {
    width:              "100%",
  },
})
