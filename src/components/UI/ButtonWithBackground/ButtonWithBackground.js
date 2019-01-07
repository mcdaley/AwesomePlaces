//-----------------------------------------------------------------------------
// src/components/UI/ButtonWithBackground/ButtonWithBackground.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  View,
  StyleSheet }  from 'react-native'

const buttonWithBackground = (props) => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>
        {props.children}
      </Text>
    </View>
  )

  if(Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    )
  }
  else {
    return (
      <TouchableOpacity onPress={props.onPress}>
        {content}
      </TouchableOpacity>
    )
  }
}

export default buttonWithBackground

const styles = StyleSheet.create({
  button: {
    padding:          10,
    margin:           5,
    borderRadius:     5,
    borderWidth:      1,
    borderColor:      '#333333',
  }
})
