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
  ActivityIndicator
} from 'react-native';
import jsonLink from './../data/JSONLinks'

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
import styles from './../../assets/styles/Style'

export default class IndoRugby extends Component {
  constructor(){
    super();
    this.state = {
      data:null,
      avatarSource: null
    }
  }

  componentWillMount() {
        fetch(jsonLink.teammateJSON)
        .then((response) => response.json())
        .then((response) => this.setState({ data: response }))
        .catch((error) => console.warn("fetch error:", error))
  }

  render() {
    if(!this.state.data) {
        return(
          <View>
            <ActivityIndicator
              animating={this.state.animating}
              size="large"
              />
            <Text style={styles.headline}>Loading</Text>
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
        <Image source={require('./../../assets/images/sub-header-photo.png')} style={styles.headlineImage} >
          <View style={styles.backdropView}>
            <Text style={styles.teammateHeadline}>TEAMMATE PHOTOS</Text>
          </View>
        </Image>
        <View style={styles.bStyle}>
          {/* <Button
            color= "red"
            //marginBottom= 50
            onPress={takePhotoPressed}
            title="Take a Photo"
          /> */}
          <Icon.Button name="camera" backgroundColor="#FF0000" onPress={this.takePhotoPressed}>
            <View style={styles.bText}><Text>Take a Photo</Text></View>
          </Icon.Button>
          <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        </View>
        <View style={styles.bStyle}>
          {/* <Button
            // style={styles.bStyle}
            color= "red"
            onPress={loadLibraryPressed}
            title="Load from Library"
          /> */}
          <Icon.Button name="image" backgroundColor="#FF0000" onPress={this.loadLibraryPressed}>
            <View style={styles.bText}><Text>Load from Library</Text></View>
          </Icon.Button>
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
          //asdasd
        }}>
      <Image
        resizeMode = "cover"
        style = {{ flex: 1}}
        source = {{ uri: item.src }}/>
      </TouchableOpacity>
      )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   list: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     },
//   headlineImage:{
//     paddingTop: 20,
//     width: 360,
//     height: 120,
//     marginBottom: 20
//   },
//   bStyle:{
//     //backgroundColor: '#FF0000',
//     //textAlign: 'center',
//     marginBottom: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   backdropView: {
//     height: 120,
//     width: 320,
//     backgroundColor: 'rgba(0,0,0,0)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headline: {
//     fontSize: 30,
//     textAlign: 'center',
//     marginTop: 5,
//     color: '#f0f8ff',
//     fontWeight: 'bold'
//   },
//   image: {
//     width: 150,
//     height: 150,
//     marginLeft: 17,
//     marginBottom: 10
//   }
// });

const takePhotoPressed = () => {
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
      console.log("nancy cantik",response.uri)
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source
      });
    }
  });
};

  //<Image source={this.state.avatarSource} style={styles.uploadAvatar} />

//   ImagePicker.launchCamera(options, (response)  => {
//   // Same code as in above section!
// });

   //Alert.alert('Button has been pressed!');


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
      console.log("nancy cantik",response.uri)
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source
      });
    }
  });
  //Alert.alert('Button has been pressed!');
};


AppRegistry.registerComponent('IndoRugby', () => IndoRugby);
//export default IndoRugby;
