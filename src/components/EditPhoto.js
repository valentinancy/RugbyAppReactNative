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
  TouchableOpacity,
  CameraRoll
} from 'react-native';

import { Column as Col, Row } from 'react-native-flexbox-grid';
import ImagePicker from 'react-native-image-picker';
import { takeSnapshot, dirs } from 'react-native-view-shot'
import RNGRP from 'react-native-get-real-path'
import ImageResizer from 'react-native-image-resizer';
import { Actions } from 'react-native-router-flux'

const { CacheDir, DocumentDir, MainBundleDir, MovieDir, MusicDir, PictureDir } = dirs;
// import Canvas from 'react-native-canvas';

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
  constructor() {
    super();
    this.state = {
      frame: null,
      choosenFrame: null
    }
  }

  showFrame() {
    if (!this.state.choosenFrame) {
      return (
        <View style={styles.emptyView}>
          <Image style={styles.empty} source={require('./../../assets/images/sub-header-photo.png')} />
        </View>
      )
    }
    return (
      <View style={styles.choosenFrameView}>
        <Image style={styles.choosenFrame} source={this.state.choosenFrame} />
      </View>
    )
  }

  setChoosenFrame(e, frame) {
    this.setState({
      choosenFrame: frame
    })
  }

  //  snapshot = refname => () =>
  //   takeSnapshot(this.refs[refname], this.state.value)
  //   .then(res =>
  //     this.state.value.result !== "file"
  //     ? res
  //     : new Promise((success, failure) =>
  //     // just a test to ensure res can be used in Image.getSize
  //     Image.getSize(
  //       res,
  //       (width, height) => (console.log(res,width,height), success(res)),
  //       failure)))
  //   .then(res => this.setState({
  //     error: null,
  //     res,
  //     previewSource: { uri:
  //       this.state.value.result === "base64"
  //       ? "data:image/"+this.state.value.format+";base64,"+res
  //       : res }
  //   }))
  //   .catch(error => (console.warn(error), this.setState({ error, res: null, previewSource: null })));

  snapshot = refname => () =>
    takeSnapshot(this.refs[refname], {
      format: "png",
      result: "data-uri",
      width: 152.5,
      height: 152.5,
      snapshotContentContainer: false,
      path: PictureDir + "/foo.png"
    })
      .then(
      uri => {
        // console.log(" isi uri ", uri)
        // CameraRoll.saveToCameraRoll(uri,'photo').then(function(result) {
        //   console.log('ke save ' + result);
        // }).catch(function(error) {
        //   console.log('ga ke save ' + error);
        // });
        // ImageResizer.createResizedImage(uri, 400, 400, 'PNG', 10, 0, null).then((resizedImageUri) => {
        //     console.log("udah nih",resizedImageUri)
        // }).catch((err) => {
        //     console.log("error cuy", err)
        // });
        this.uploadImage(uri)
      },
      error => console.error("Oops, snapshot failed", error)
      );


  uploadImage(image) {
    const data = new FormData();
    console.log("nih buat lu", image)
    data.append('userId', 'nancy')
    data.append('photo', image)
    fetch('https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json', {
      method: 'post',
      body: data
    }).then(res => {
      console.log(res)
      Actions.teammate()
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <ScrollView>
        <Image source={require('./../../assets/images/sub-header-photo.png')} style={styles.headlineImage} >
          <View style={styles.backdropView}>
            <Text style={styles.teammateHeadline}>TEAMMATE PHOTOS</Text>
          </View>
        </Image>

        <View>
          <View style={{ width: 400, height: 400 }} ref="header" collapsable={false}>
            <View style={styles.choosenImageView}>
              <Image source={{ uri: this.props.asd }} style={styles.choosenImage} resizeMode='cover' />
            </View>
            {this.showFrame()}
          </View>

          {/* <Canvas
            context={{message: 'Hello!'}}
            render={renderCanvas}
            style={{height: 200, width: 200}}/> */}

          {/*<Image source={require('')} style={styles.headlineImage} >
              <View style={styles.backdropView}>
                <Text style={styles.teammateHeadline}>TEAMMATE PHOTOS</Text>
              </View>
            </Image>*/}
          {/* - tampilin hasil foto
                - tampilin grid of frame

              */}

          <View style={styles.frameGroup}>
            <Row size={10} nowrap>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame01.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame01.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame02.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame02.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame03.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame03.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame04.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame04.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame05.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame05.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row size={10} nowrap>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame06.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame06.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame07.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame07.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame08.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame08.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame09.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame09.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
              <Col sm={2} md={2} lg={2}>
                <TouchableOpacity onPress={(e) => this.setChoosenFrame(e, require('./../../assets/images/frame10.png'))}>
                  <View style={styles.frameImageView}>
                    <Image
                      style={styles.frameImage}
                      source={require('./../../assets/images/frame10.png')}
                    />
                  </View>
                </TouchableOpacity>
              </Col>
            </Row>
          </View>
        </View>
        <View style={styles.bStyle}>
          <Button
            color="red"
            //marginBottom= 50
            onPress={this.snapshot("header")}
            title="Submit"
          />
          {/* <Icon.Button name="cloud-upload" backgroundColor="#FF0000" onPress={this.uploadPhoto}>
            Submit
          </Icon.Button> */}
        </View>
        <View style={styles.bStyle}>
          <Button
            // style={styles.bStyle}
            color="red"
            onPress={sharePhoto}
            title="Share"
          />
          {/* <Icon.Button name="share" backgroundColor="#FF0000" onPress={this.sharePhoto}>
            Share
          </Icon.Button> */}
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