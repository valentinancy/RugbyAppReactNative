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

var readMore = React.createClass({
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

AppRegistry.registerComponent('RugbyAppReactNative', () => readMore);
