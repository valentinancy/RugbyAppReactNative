Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeWebviewBridge=require('react-native-webview-bridge');var _reactNativeWebviewBridge2=babelHelpers.interopRequireDefault(_reactNativeWebviewBridge);

var injectScript='\n\t(function() {\n    \tif(WebViewBridge) {\n      \t\tWebViewBridge.onMessage = function(reactNativeData) {\n\t\t        var jsonData = JSON.parse(reactNativeData);\n\t\t        renderChart(jsonData.data);\n\t\t        var dataToSend = JSON.stringify({ success: true, message: \'Data received\'} );\n\t\t        WebViewBridge.send(dataToSend);\n      \t\t};\n    \t}\n  \t}());\n';var












ReadMoreFixtures=function(_Component){babelHelpers.inherits(ReadMoreFixtures,_Component);function ReadMoreFixtures(){babelHelpers.classCallCheck(this,ReadMoreFixtures);return babelHelpers.possibleConstructorReturn(this,(ReadMoreFixtures.__proto__||Object.getPrototypeOf(ReadMoreFixtures)).apply(this,arguments));}babelHelpers.createClass(ReadMoreFixtures,[{key:'onBridgeMessage',value:function onBridgeMessage(

message){
var jsonData=JSON.parse(webViewData);
if(jsonData.success){
Alert.alert(jsonData.message);
}
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNativeWebviewBridge2.default,{
ref:'webViewBridge',
onBridgeMessage:this.onBridgeMessage.bind(this),
injectedJavaScript:injectScript,
source:{uri:this.props.url}}));

}}]);return ReadMoreFixtures;}(_react.Component);exports.default=


ReadMoreFixtures;