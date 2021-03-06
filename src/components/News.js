import React, { Component } from 'react'
import { 
  AppRegistry,
  View, 
  ScrollView,
  ListView,
  Text,
  Image,
  Linking,
  ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './../../assets/styles/Style'
import jsonLink from './../data/JSONLinks'

class News extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      animating: true,
      canLoad:true,
    };
  }

  componentDidMount() {
    fetch(jsonLink.newsJSON) 
    .then((response) => response.json())
    .then((responseData) => {
            this.setState({dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,                                       
      }).cloneWithRows(responseData)});
        })
    .catch((error) => {this.state.canLoad=false;this.forceUpdate();});
  }

  handleClick(e,url) {
    Actions.readMoreNews({url: url})
  }


  render() { 
    if(this.state.canLoad==false){
      return(
        <View style={styles.loader}>          
          <Text style={styles.loaderText}>Cannot connect to server</Text>
        </View>
      )
    }
    else if(!this.state.dataSource){
      return( 
        <View style={styles.loader}>
          <ActivityIndicator
            animating={this.state.animating}
            size="large" />
          <Text style={styles.loaderText}>Loading</Text>
        </View>
      )
    }
    return (
       <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('./../../assets/images/sub-header-news.png')} style={styles.header} >
          <Text style={styles.headline}>LATEST NEWS</Text>
        </Image>
        <ListView
            dataSource = {this.state.dataSource}
            renderRow={(rowData) =>
                <View style={styles.jsonLoaderContainer}>
                  <Image source={{uri: rowData.img}} style={styles.newsImage} />
                  <Text style={styles.newsTitle}>{rowData.title}</Text>
                 <Text>
                    {rowData.summary}&nbsp;
                    <Text style={styles.newsURL} onPress={ (e) => this.handleClick(e,rowData.url) }>read more...</Text>
                 </Text>                                        
                </View>
            } /> 
        </ScrollView>
    );

  } 
    
}

export default News