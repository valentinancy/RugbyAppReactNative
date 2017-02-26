import React, { Component } from 'react'
import { 
  AppRegistry,
  StyleSheet,
  View, 
  ScrollView,
  ListView,
  Text,
  Image,
  Linking,
  Dimensions } from 'react-native'


var width = Dimensions.get('window').width; 

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
    this.fetchData();
  }

  fetchData() {

    fetch('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json') 
    .then((response) => response.json())
    .then((responseData) => {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(responseData)});
        })
    .done(() => {});
  } 


  render() {
    
    return (
       /* <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('./www/images/sub-header-news.png')} style={styles.headerImage} >
          <Text style={styles.headerTitle}>LATEST NEWS</Text>
        </Image> */
        <ListView
            dataSource = {this.state.dataSource}
            renderRow={(rowData) =>
                <View style={styles.container}>
                  <Image source={{uri: rowData.img}} style={styles.newsImage} />
                  <Text style={styles.newsTitle}>{rowData.title}</Text>
                 <Text>
                    {rowData.summary}&nbsp;
                    <Text style={styles.newsURL} onPress={() => Linking.openURL(rowData.url)}>read more...</Text>
                 </Text>                                        
                </View>
            } /> 
        /* </ScrollView> */
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 50,
  },
  headerImage: {
    width: this.width,
    height: 100,
  },
  newsTitle: {
    fontWeight: 'bold',
  },
  newsImage: {
    flex: 1,
    width: this.width,
    height: 200,
  },
  newsURL: {
    color: 'blue',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  }
});

export default News
