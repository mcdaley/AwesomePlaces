//-----------------------------------------------------------------------------
// src/screens/SideDrawer/SideDrawer.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import Icon           from 'react-native-vector-icons/Ionicons'
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet }              from 'react-native'

class SideDrawerScreen extends Component {
  render() {
    return (
      <View style={[styles.container, {width: Dimensions.get('window').width * 0.8}]}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon
              name  = {Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
              size  = {30}
              color = '#AAAAAA'
              style = {styles.drawerItemIcon}
            />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SideDrawerScreen

const styles = StyleSheet.create({
  container: {
    flex:             1,
    paddingTop:       50,
    backgroundColor:  'white',
  },
  drawerItem: {
    flexDirection:    'row',
    alignItems:       'center',
    padding:          10,
    backgroundColor:  '#EEEEEE',
  },
  drawerItemIcon: {
    marginRight:      10,
  },
})
