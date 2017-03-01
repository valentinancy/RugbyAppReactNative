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

//import PhotoGrid from 'react-native-photo-grid';
import {TouchableOpacity,} from 'react-native';

export default class IndoRugby extends Component {
  constructor(){
    super();
    this.state = {data:null, items:[]};
  }

  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json' }
    });
    this.setState({ items });
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

      const photos= this.state.data.data.map((photo) => {
        console.log("ini data", photo)
      return(
        <Image
           style={styles.image}
          key={photo}
          source={{uri: photo}}>

          </Image>
      )
      })
    return (
      <ScrollView>
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

<View>
  {photos}
</View>
        {/* <PhotoGrid
          data = { this.state.items }
          itemsPerRow = { 2 }
          itemMargin = { 1 }
          // renderHeader = { this.renderHeader }
          renderItem = { this.renderItem }
        /> */}
      </ScrollView>
    );
  }

  // renderHeader(){
  //   return(<Text>I'm on top!</Text>);
  // }

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
  },
  image: {
    width: 80,
    height: 80
  }
});

const takePhotoPressed = () => {
  Alert.alert('Button has been pressed!');
};
const loadLibraryPressed = () => {
  Alert.alert('Button has been pressed!');
};


AppRegistry.registerComponent('IndoRugby', () => IndoRugby);
//export default IndoRugby;
