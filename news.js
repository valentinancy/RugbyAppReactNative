import React,{Component} from 'react';
import {Text} from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';
let WebViewBridge=require('react-native-webview-bridge');

export default class News extends Component{
	/*_getContent: function(url){
		fetch(url).then(function(response){
			return response.json();
		})
	}*/
	
	componentDidMount(){
		let chartData = {data: '...'}

		setTimeout(() => {
			this.refs.webviewbridge.sendToBridge(JSON.stringify(data));
		}, 5000);
	},

	render(){
		return(
			<WebViewBridge
				ref="webviewbridge"
				onBridgeMessage={this.onBridgeMessage.bind(this)}
				source={{uri: "http://rugbyindonesia.or.id/2016-indonesian-national-team-the-rhinos-squad-announcement/"}}
			/>
		);
	}

	onBridgeMessage: function(webViewData){
		let jsonData = JSON.parse(webViewData);

		if(jsonData.success){
			Alert.alert(jsonData.message);
		}
		console.log('data received', webViewData, jsonData);
	}
}

<script>
	(function(){
		if(WebViewBridge){
			WebViewBridge.onMessage = function(reactNativeData){
				var jsonData = JSON.parse(reactNativeData);
				renderChart(jsonData.data);
				var dataToSend = JSON.stringify({success: true, message: 'Data received'});

				WebViewBridge.send(dataToSend);
			};
		}
	}())
</script>
