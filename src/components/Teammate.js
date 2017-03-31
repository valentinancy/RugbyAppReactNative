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
  Button,
  Alert,
  ScrollView,
  ListView
} from 'react-native';

import {TouchableOpacity,} from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import styles from './../../assets/styles/Style'

export default class IndoRugby extends Component {
  constructor(){
    super();
    this.state = {
      data:null
    }
  }

  componentWillMount() {
        fetch('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
        .then((response) => response.json())
        .then((response) => this.setState({ data: response }))
        .catch((error) => console.warn("fetch error:", error))
  }

  render() {
    if(!this.state.data) {
            return <Text>Loading</Text>
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
        <Image style={styles.header}
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
  Alert.alert('Button has been pressed!');
};
const loadLibraryPressed = () => {
  Alert.alert('Button has been pressed!');
};


AppRegistry.registerComponent('IndoRugby', () => IndoRugby);
//export default IndoRugby;
