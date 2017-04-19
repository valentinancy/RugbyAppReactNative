/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 // https://github.com/Automattic/node-canvas -> canvas on react native

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
  ListView
} from 'react-native';

import {TouchableOpacity,} from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import ImagePicker from 'react-native-image-picker';

// const options = {
//   title: 'Select Avatar',
//   customButtons: [
//     {name: 'fb', title: 'Choose Photo from Facebook'},
//   ],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images'
//   }
// };
import styles from './../../assets/styles/Style'

class EditPhoto extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     data: null
  //   }
  // }

  render() {
    // if(!this.state.data) {
    //         return <Text>Loading</Text>
    //     }

const photos = this.state.data.data.map((photo,index) => {
      if(index%2==0) {
        return(
          <View>
            <Row key={index} size={10} nowrap>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+1]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+2]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+3]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+4]}}
                      />
                  </Col>
              </Row>
              <Row key={index} size={10} nowrap>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+1]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+2]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+3]}}
                      />
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                  <Image
                      style={ styles.image }
                      source={{uri: this.state.data.data[index+4]}}
                      />
                  </Col>
              </Row>
            </View>
        )
      }
    })
      

    return (
      <ScrollView>
        <Image source={require('./../../assets/images/sub-header-photo.png')} style={styles.headlineImage} >
          <View style={styles.backdropView}>
            <Text style={styles.teammateHeadline}>TEAMMATE PHOTOS</Text>
          </View>
        </Image>

        <View>
           <Image source={{uri: this.props.asd}} style={styles.headlineImage} />
        </View>
        <View style={styles.bStyle}>
          {/* <Button
            color= "red"
            //marginBottom= 50
            //onPress={takePhotoPressed}
            title="Submit"
          /> */}
          <Icon.Button name="cloud-upload" backgroundColor="#FF0000" onPress={this.uploadPhoto}>
            Submit
          </Icon.Button>
        </View>
        <View style={styles.bStyle}>
          {/* <Button
            // style={styles.bStyle}
            color= "red"
            onPress={loadLibraryPressed}
            title="Load from Library"
          /> */}
          <Icon.Button name="share" backgroundColor="#FF0000" onPress={this.sharePhoto}>
            Share
          </Icon.Button>
        </View>
      </ScrollView>
    );
  }
}

const uploadPhoto = () => {
  Alert.alert('Button has been pressed!');
};

const sharePhoto = () => {
  Alert.alert('Button has been pressed!');
};

export default EditPhoto
