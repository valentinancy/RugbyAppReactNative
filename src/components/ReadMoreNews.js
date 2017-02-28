import React,{Component} from 'react';
import {AppRegistry,Text} from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';

const injectScript = `
  (function () {
    if(WebViewBridge){
      WebViewBridge.onMessage = function(reactNativeData){
        var jsonData = JSON.parse(reactNativeData);
        renderChart(jsonData.data);
        var dataToSend = JSON.stringify({success: true, message: 'Data received'});

        WebViewBridge.send(dataToSend);
      };
    }
  }());
`;

class ReadMoreNews extends Component{
  onBridgeMessage(message){
    let jsonData = JSON.parse(webViewData);

    if(jsonData.success){
      Alert.alert(jsonData.message);
    }
    console.log('data received', webViewData, jsonData);
  }
 
  readMore(no){
    switch(no){
      case 1:
        render1();
        break;
      case 2:
        render2();
        break;
      case 3:
        render3();
        break;
      case 4:
        render4();
        break;
    }
  }

  render1() {
    return (
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage.bind(this)}
        injectedJavaScript={injectScript}
        source={{uri: "http://rugbyindonesia.or.id/2016-indonesian-national-team-the-rhinos-squad-announcement"}}/>
    );
  }

  render2() {
    return (
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage.bind(this)}
        injectedJavaScript={injectScript}
        source={{uri: "http://rugbyindonesia.or.id/srikandi-sevens-tournament-and-get-into-rugby-jagorawi"}}/>
    );
  }

  render3() {
    return (
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage.bind(this)}
        injectedJavaScript={injectScript}
        source={{uri: "http://rugbyindonesia.or.id/papua-sevens-rugby-dominates-historic-rugby-event"}}/>
    );
  }

  render4() {
    return (
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage.bind(this)}
        injectedJavaScript={injectScript}
        source={{uri: "http://rugbyindonesia.or.id/indonesian-rugby-mobile-application-launched"}}/>
    );
  }
}
export default ReadMoreNews
/*var readMore = React.createClass({
  onBridgeMessage(message){
    let jsonData = JSON.parse(webViewData);

    if(jsonData.success){
      Alert.alert(jsonData.message);
    }
    console.log('data received', webViewData, jsonData);
  },
 
  render() {
    return (
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage.bind(this)}
        injectedJavaScript={injectScript}
        source={{uri: "http://google.com"}}/>
    );
  }
});

AppRegistry.registerComponent('ProjectPercobaan', () => readMore);*/
