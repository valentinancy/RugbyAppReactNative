/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
  ListView,
  ActivityIndicator,
  CameraRoll
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import jsonLink from './../data/JSONLinks';
import styles from './../../assets/styles/Style';
import {TouchableOpacity,} from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Teammate extends Component {
  constructor(){
    super();
    this.state = {
      data:null,
      animating:true,
      avatarSource: null,
      canLoad:true,
    }
  }

  componentWillMount() {
        fetch(jsonLink.teammateJSON)
        .then((response) => response.json())
        .then((response) => this.setState({ data: response }))
        .catch((error) => {this.state.canLoad=false;this.forceUpdate();})
  }

  render() {
    if(this.state.canLoad==false){
      return(
        <View style={styles.loader}>
          <Text style={styles.loaderText}>Cannot connect to server</Text>
        </View>
      )
    }
    else if(!this.state.data) {
        return(
          <View style = {styles.loader}>
            <ActivityIndicator
              animating={this.state.animating}
              size="large"
              />
            <Text style={styles.loaderText}>Loading</Text>
        </View>
      )
    }

    const photos = this.state.data.data.map((photo,index) => {
      if(index%2==0) {
        return(
          <Row key={index} size={10} nowrap>
                <Col sm={5} md={5} lg={5}>
                <Image
                    style={ styles.image }
                    source={{uri: this.state.data.data[index]}}
                    />
                </Col>
                <Col sm={5} md={5} lg={5}>
                <Image
                    style={ styles.image }
                    source={{uri: this.state.data.data[index+1]}}
                    />
                </Col>
            </Row>
        )
      }
    })
    return (
      <ScrollView>
        <Image source={require('./../../assets/images/sub-header-photo.png')} style={styles.header} >
          <Text style={styles.headline}>TEAMMATE PHOTOS</Text>
        </Image>
        <View style={styles.bStyle}>
          <Button
            color= "red"
            onPress={takePhotoPressed}
            title="Take a Photo"
          />
          <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        </View>
        <View style={styles.bStyle}>
          <Button
            color= "red"
            onPress={loadLibraryPressed}
            title="Load from Library"
          />
          <Image source={this.state.avatarSource} style={styles.uploadAvatar} />

        </View>

        <View>
          { photos }
        </View>
      </ScrollView>
    );
  }

  renderItem(item, itemSize){
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize, height:itemSize }}
        onPress = { () => {
          //do something
        }}>
      <Image
        resizeMode = "cover"
        style = {{ flex: 1}}
        source = {{ uri: item.src }}/>
      </TouchableOpacity>
      )
  }
}

const takePhotoPressed = () => {
  let baseImage = new Image();
  let imageStr = "";
  let dataURL = "";

  ImagePicker.launchCamera(options, (response)  => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      console.log("Camera launched",response.uri)
      Actions.editphoto({asd: response.uri})

      CameraRoll.saveToCameraRoll(response.path,'photo').then(function(result) {
  console.log('save succeeded ' + result);
}).catch(function(error) {
  console.log('save failed ' + error);
});
    }
  });
};

const loadLibraryPressed = () => {
  ImagePicker.launchImageLibrary(options, (response)  => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      console.log("Library opened",response.uri)
      let source = { uri: response.uri };

      Actions.editphoto({asd: response.uri})
    }
  });
};

export default Teammate;
