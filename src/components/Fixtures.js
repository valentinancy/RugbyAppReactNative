import React,{Component} from 'react';
import {AppRegistry,Image,ListView,ScrollView,View,StyleSheet,Dimensions,Text,ActivityIndicator} from 'react-native';
import styles from './../../assets/styles/Style'
import jsonLink from './../data/JSONLinks'

var screenWidth=Dimensions.get('window').width;

class Fixtures extends Component{
  constructor(props){
    super(props);
    this.state={
      data:null,
      animating:true,
    }
  }

  componentDidMount(){
    fetch(jsonLink.fixturesJSON)
    .then((response) => response.json())
    .then((response) => {
      this.setState({ data: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,                                       
      }).cloneWithRows(response) });
    }).catch((error) => console.warn("error in fetching",error.message))
  }

  render(){  
    if(!this.state.data){
      return( 
        <View style={styles.loader}>
          <ActivityIndicator
            animating={this.state.animating}
            size="large" />
          <Text style={styles.loaderText}>Loading</Text>
        </View>
      )
    }
    return(
      <ScrollView>
        <Image source={require('./../../assets/images/sub-header-fixture.png')} style={styles.header}>
          <Text style={styles.headline}>FIXTURES & RESULT</Text>
        </Image>
       <ListView
          dataSource={this.state.data}
          renderRow={(rowData) =>
           <View style={styles.container}>
              <Image source={{uri:rowData.img}} style={styles.imgBanner} />
            </View>
          }/>
      </ScrollView>
    );
  }
}

export default Fixtures
