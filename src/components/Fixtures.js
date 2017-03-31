import React,{Component} from 'react';
import {AppRegistry,Image,ListView,ScrollView,View,StyleSheet,Dimensions,Text} from 'react-native';
import styles from './../../assets/styles/Style'

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
        <Image source={require('../../assets/images/sub-header-fixture.png')} style={styles.header}>
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
