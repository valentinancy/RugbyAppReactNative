import React,{Component} from 'react';
import {AppRegistry,Image,ListView,ScrollView,View,StyleSheet,Dimensions,Text} from 'react-native';

var screenWidth=Dimensions.get('window').width;

class Fixtures extends Component{
  constructor(props){
    super(props);
    this.state={
      data:new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,                                       
      }),
    }
  }

  componentDidMount(){
    fetch('https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json')
    .then((response) => response.json())
    .then((response) => {
      this.setState({ data: this.state.data.cloneWithRows(response) });
    }).catch((error) => console.warn("error in fetching",error.message))
  }

  render(){  

    return(
      <ScrollView>
        <Image source={require('../../assets/images/sub-header-fixture.png')} style={styles.pageBanner} />
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

const styles=StyleSheet.create({
  container:{
    margin:15,
  },
  imgBanner:{
    width: this.screenWidth,
    height:150,
    resizeMode:'contain',
  },
  pageBanner:{
    width: this.screenWidth,
    resizeMode: 'contain',
  }
});

export default Fixtures
