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

import {TouchableOpacity} from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import ImagePicker from 'react-native-image-picker';
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
  constructor(){
    super();
    this.state = {
      frame:null
    }
  }

  render() {
    // if(!this.state.data) {
    //         return <Text>Loading</Text>
    //     }
    return (
      <ScrollView>
        <Image source={require('./../../assets/images/sub-header-photo.png')} style={styles.headlineImage} >
          <View style={styles.backdropView}>
            <Text style={styles.teammateHeadline}>TEAMMATE PHOTOS</Text>
          </View>
        </Image>

        <View>
          <View style={styles.choosenImageView}>
            <Image source={{uri: this.props.asd}} style={styles.choosenImage} />
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
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame01.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame02.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame03.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame04.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame05.png')}
                      />
                    </View>
                  </Col>
              </Row>
              <Row size={10} nowrap>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame06.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame07.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame08.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame09.png')}
                      />
                    </View>
                  </Col>
                  <Col sm={2} md={2} lg={2}>
                    <View style={styles.frameImageView}>
                      <Image
                        style={ styles.frameImage }
                        source={require('./../../assets/images/frame10.png')}
                      />
                    </View>
                  </Col>
              </Row>
            </View>
        </View>
          {/* grid frame :

            */}
        <View style={styles.bStyle}>
          <Button
            color= "red"
            //marginBottom= 50
            onPress={uploadPhoto}
            title="Submit"
          />
          {/* <Icon.Button name="cloud-upload" backgroundColor="#FF0000" onPress={this.uploadPhoto}>
            Submit
          </Icon.Button> */}
        </View>
        <View style={styles.bStyle}>
          <Button
            // style={styles.bStyle}
            color= "red"
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