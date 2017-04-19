Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeWebviewBridge=require('react-native-webview-bridge');var _reactNativeWebviewBridge2=babelHelpers.interopRequireDefault(_reactNativeWebviewBridge);

var injectScript='\n  (function () {\n    if(WebViewBridge){\n      WebViewBridge.onMessage = function(reactNativeData){\n        var jsonData = JSON.parse(reactNativeData);\n        renderChart(jsonData.data);\n        var dataToSend = JSON.stringify({success: true, message: \'Data received\'});\n\n        WebViewBridge.send(dataToSend);\n      };\n    }\n  }());\n';var













ReadMoreNews=function(_Component){babelHelpers.inherits(ReadMoreNews,_Component);function ReadMoreNews(){babelHelpers.classCallCheck(this,ReadMoreNews);return babelHelpers.possibleConstructorReturn(this,(ReadMoreNews.__proto__||Object.getPrototypeOf(ReadMoreNews)).apply(this,arguments));}babelHelpers.createClass(ReadMoreNews,[{key:'onBridgeMessage',value:function onBridgeMessage(
message){
var jsonData=JSON.parse(webViewData);

if(jsonData.success){
Alert.alert(jsonData.message);
}
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNativeWebviewBridge2.default,{
ref:'webviewbridge',
onBridgeMessage:this.onBridgeMessage.bind(this),
injectedJavaScript:injectScript,
source:{uri:this.props.url}}));

}}]);return ReadMoreNews;}(_react.Component);exports.default=


ReadMoreNews;