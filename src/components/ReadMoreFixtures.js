import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import WebViewBridge from 'react-native-webview-bridge'

const injectScript = `
	(function() {
    	if(WebViewBridge) {
      		WebViewBridge.onMessage = function(reactNativeData) {
		        var jsonData = JSON.parse(reactNativeData);
		        renderChart(jsonData.data);
		        var dataToSend = JSON.stringify({ success: true, message: 'Data received'} );
		        WebViewBridge.send(dataToSend);
      		};
    	}
  	}());
`;

class ReadMoreFixtures extends Component {

	onBridgeMessage(message) {
		let jsonData = JSON.parse(webViewData);
		if(jsonData.success) {
			Alert.alert(jsonData.message);
		}
	}

	render() {
		return (
			<WebViewBridge 
				ref = "webViewBridge" 
				onBridgeMessage = { this.onBridgeMessage.bind(this) }
				injectedJavaScript = { injectScript }
				source = {{ uri: this.props.url }} />
		);
	}

}
export default ReadMoreFixtures