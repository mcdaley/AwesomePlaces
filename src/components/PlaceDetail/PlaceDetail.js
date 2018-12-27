//-----------------------------------------------------------------------------
// src/components/PlaceDetail/PlaceDetail.js
//-----------------------------------------------------------------------------
import React      from 'react'
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet }    from 'react-native'

const placeDetail = (props) => {
  let modalContent = null

  if(props.selectedPlace) {
      modalContent = (
        <View style={styles.modalContainer}>
          <Image
            source  = {props.selectedPlace.image}
            style   = {styles.placeImage}
          />
          <Text style={styles.placeName}>
            {props.selectedPlace.name}
          </Text>
        </View>
      )
  }

  return(
    <Modal
      visible         = {props.selectedPlace !== null}
      animationType   = 'slide'
      onRequestClose  = {props.ModalClosed}
    >
      <View>
        {modalContent}
        <View>
          <Button
            title   = 'Delete'
            color   = 'red'
            onPress = {props.onItemDeleted}
          />
          <Button
            title   = 'Close'
            onPress = {props.onModalClosed}
          />
        </View>
      </View>
    </Modal>
  )
}

export default placeDetail

const styles = StyleSheet.create({
  modalContainer: {
    margin:             40,
  },
  placeImage: {
    width:              '100%',
    height:             200,
  },
  placeName: {
    fontWeight:         'bold',
    textAlign:          'center',
    fontSize:           28,
  }
})