var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');


var injectScript='\n  (function () {\n    if(WebViewBridge){\n      WebViewBridge.onMessage = function(reactNativeData){\n        var jsonData = JSON.parse(reactNativeData);\n        renderChart(jsonData.data);\n        var dataToSend = JSON.stringify({success: true, message: \'Data received\'});\n\n        WebViewBridge.send(dataToSend);\n      };\n    }\n  }());\n';













var readMore=_react2.default.createClass({displayName:'readMore',
onBridgeMessage:function onBridgeMessage(message){
var jsonData=JSON.parse(webViewData);

if(jsonData.success){
Alert.alert(jsonData.message);
}
console.log('data received',webViewData,jsonData);
},

render:function render(){







return(
_react2.default.createElement('div',null));

}});


_reactNative.AppRegistry.registerComponent('RugbyAppReactNative',function(){return readMore;});