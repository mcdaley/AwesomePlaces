//-----------------------------------------------------------------------------
// src/components/PickImage/PickImage.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Image,
  Button,
  StyleSheet }                from 'react-native'
import ImagePicker            from 'react-native-image-picker'

//** import imagePlaceholder     from '../../assets/beautiful-place.jpg'

class PickImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pickedImage:  {},
    }
  }

  pickImageHandler = () => {
    let options = {
      title:  'Pick an Image',
    }

    ImagePicker.showImagePicker(options, (res) => {
      if(res.didCancel){
        console.log(`User cancelled image picker`)
      }
      else if(res.error) {
        console.log('ImagePicker Error: ', res.error)
      }
      else {
        this.setState({
          pickedImage: { uri: res.uri },
        })
        this.props.onImagePicked({uri: res.uri, base64: res.data})
      }
    })
  }

  /**
   *
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button
            title='Pick Image'
            onPress = {this.pickImageHandler}
          />
        </View>
      </View>
    )
  }
}

export default PickImage

const styles = StyleSheet.create({
  container: {
    width:              '100%',
    alignItems:         'center',
  },
  placeholder: {
    borderWidth:        1,
    borderColor:        '#000000',
    backgroundColor:    '#EEEEEE',
    width:              '80%',
    height:             150,
  },
  previewImage: {
    width:              '100%',
    height:             '100%',
  },
  button: {
    margin:             8,
  }
})
