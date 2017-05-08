import React, { Component } from 'react';
import { AppRegistry, Image, ListView, ScrollView, View, Text, Linking, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux'
import styles from './../../assets/styles/Style'
import jsonLink from './../data/JSONLinks'

class Fixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      animating: true,
      canLoad: true,
    }
  }

  componentDidMount() {
    fetch(jsonLink.fixturesJSON)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          data: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }).cloneWithRows(response)
        });
      }).catch((error) => { this.state.canLoad = false; this.forceUpdate(); })
  }

  handleClick(e, url) {
    Actions.readMoreFixtures({ url: url })
  }

  render() {
    if (this.state.canLoad == false) {
      return (
        <View style={styles.loader}>
          <Text style={styles.loaderText}>Cannot connect to server</Text>
        </View>
      )
    }
    else if (!this.state.data) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator
            animating={this.state.animating}
            size="large" />
          <Text style={styles.loaderText}>Loading</Text>
        </View>
      )
    }
    return (
      <ScrollView>
        <Image source={require('./../../assets/images/sub-header-fixture.png')} style={styles.header}>
          <Text style={styles.headline}>FIXTURES & RESULT</Text>
        </Image>
        <ListView
          dataSource={this.state.data}
          renderRow={(rowData) =>
            <View style={styles.jsonLoaderContainer}>
              <TouchableNativeFeedback onPress={(e) => this.handleClick(e, rowData.url)} >
                <Image source={{ uri: rowData.img }} style={styles.imgBanner} />
              </TouchableNativeFeedback>
            </View>
          } />
      </ScrollView>
    );
  }
}

export default Fixtures
