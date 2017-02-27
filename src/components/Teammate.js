/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button, Alert
} from 'react-native';

class Teammate extends Component {
  render() {
    return (
      <View>
        <Image style={styles.headlineImage}
          source={{uri: 'http://rugbyindonesia.or.id/wp-content/uploads/2014/09/Slider-2.jpg'}}>
          <View style={styles.backdropView}>
            <Text style={styles.headline}>TEAMMATE PHOTOS</Text>
          </View>
        </Image>
        <View style={styles.bStyle}>
          <Button
            color= "red"
            //marginBottom= 50
            onPress={takePhotoPressed}
            title="Take a Photo"
          />
        </View>
        <View style={styles.bStyle}>
          <Button
            // style={styles.bStyle}
            color= "red"
            // marginBottom= "5"
            onPress={loadLibraryPressed}
            title="Load from Library"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
  headlineImage:{
    paddingTop: 20,
    width: 360,
    height: 120,
    marginBottom: 20,
  },
  bStyle:{
    //backgroundColor: '#FF0000',
    //textAlign: 'center',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    fontSize: 33,
    fontFamily: 'Iowan Old Style',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

const takePhotoPressed = () => {
  Alert.alert('Button has been pressed!');
};
const loadLibraryPressed = () => {
  Alert.alert('Button has been pressed!');
};

export default Teammate
