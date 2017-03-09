import React, { Component } from 'react'
import { 
  AppRegistry,
  View, 
  ScrollView,
  ListView,
  Text,
  Image,
  Linking } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './../../assets/styles/Style'

class News extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,                                       
      }),
    };
  }

  componentDidMount() {
    fetch('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json') 
    .then((response) => response.json())
    .then((responseData) => {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(responseData)});
        })
    .done(() => {});
  }

  handleClick(e,url) {
    Actions.readMoreNews({url: url})
  }


  render() {
    
    return (
       <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('./../../assets/images/sub-header-news.png')} style={styles.headerImage} >
          <Text style={styles.headerTitle}>LATEST NEWS</Text>
        </Image>
        <ListView
            dataSource = {this.state.dataSource}
            renderRow={(rowData) =>
                <View style={styles.container}>
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
