












'use strict';

var React=require('react');
var ReactNative=require('react-native');
var invariant=require('invariant');
var keyMirror=require('keymirror');
var resolveAssetSource=require('react-native/Libraries/Image/resolveAssetSource');var


ReactNativeViewAttributes=











ReactNative.ReactNativeViewAttributes,UIManager=ReactNative.UIManager,EdgeInsetsPropType=ReactNative.EdgeInsetsPropType,StyleSheet=ReactNative.StyleSheet,Text=ReactNative.Text,View=ReactNative.View,WebView=ReactNative.WebView,requireNativeComponent=ReactNative.requireNativeComponent,DeviceEventEmitter=ReactNative.DeviceEventEmitter,WebViewBridgeManager=ReactNative.NativeModules.WebViewBridgeManager;var
PropTypes=React.PropTypes;

var RCT_WEBVIEWBRIDGE_REF='webviewbridge';

var WebViewBridgeState=keyMirror({
IDLE:null,
LOADING:null,
ERROR:null});


var RCTWebViewBridge=requireNativeComponent('RCTWebViewBridge',WebViewBridge);




var WebViewBridge=React.createClass({displayName:'WebViewBridge',

propTypes:babelHelpers.extends({},
RCTWebViewBridge.propTypes,{




onBridgeMessage:PropTypes.func}),


getInitialState:function getInitialState(){
return{
viewState:WebViewBridgeState.IDLE,
lastErrorEvent:null,
startInLoadingState:true};

},


componentWillMount:function componentWillMount(){var _this=this;
DeviceEventEmitter.addListener("webViewBridgeMessage",function(body){var
onBridgeMessage=_this.props.onBridgeMessage;
var message=body.message;
if(onBridgeMessage){
onBridgeMessage(message);
}
});

if(this.props.startInLoadingState){
this.setState({viewState:WebViewBridgeState.LOADING});
}
},

render:function render(){
var otherView=null;

if(this.state.viewState===WebViewBridgeState.LOADING){
otherView=this.props.renderLoading&&this.props.renderLoading();
}else if(this.state.viewState===WebViewBridgeState.ERROR){
var errorEvent=this.state.lastErrorEvent;
otherView=this.props.renderError&&this.props.renderError(
errorEvent.domain,
errorEvent.code,
errorEvent.description);
}else if(this.state.viewState!==WebViewBridgeState.IDLE){
console.error('RCTWebViewBridge invalid state encountered: '+this.state.loading);
}

var webViewStyles=[styles.container,this.props.style];
if(this.state.viewState===WebViewBridgeState.LOADING||
this.state.viewState===WebViewBridgeState.ERROR){

webViewStyles.push(styles.hidden);
}var _props=

this.props,javaScriptEnabled=_props.javaScriptEnabled,domStorageEnabled=_props.domStorageEnabled;
if(this.props.javaScriptEnabledAndroid){
console.warn('javaScriptEnabledAndroid is deprecated. Use javaScriptEnabled instead');
javaScriptEnabled=this.props.javaScriptEnabledAndroid;
}
if(this.props.domStorageEnabledAndroid){
console.warn('domStorageEnabledAndroid is deprecated. Use domStorageEnabled instead');
domStorageEnabled=this.props.domStorageEnabledAndroid;
}var _props2=babelHelpers.extends({},

this.props),source=_props2.source,props=babelHelpers.objectWithoutProperties(_props2,['source']);

var webView=
React.createElement(RCTWebViewBridge,babelHelpers.extends({
ref:RCT_WEBVIEWBRIDGE_REF,
key:'webViewKey',
javaScriptEnabled:true},
props,{
source:resolveAssetSource(source),
style:webViewStyles,
onLoadingStart:this.onLoadingStart,
onLoadingFinish:this.onLoadingFinish,
onLoadingError:this.onLoadingError,
onChange:this.onMessage}));


return(
React.createElement(View,{style:styles.container},
webView,
otherView));


},

onMessage:function onMessage(event){
if(this.props.onBridgeMessage!=null&&event.nativeEvent!=null){
this.props.onBridgeMessage(event.nativeEvent.message);
}
},

goForward:function goForward(){
UIManager.dispatchViewManagerCommand(
this.getWebViewBridgeHandle(),
UIManager.RCTWebViewBridge.Commands.goForward,
null);

},

goBack:function goBack(){
UIManager.dispatchViewManagerCommand(
this.getWebViewBridgeHandle(),
UIManager.RCTWebViewBridge.Commands.goBack,
null);

},

reload:function reload(){
UIManager.dispatchViewManagerCommand(
this.getWebViewBridgeHandle(),
UIManager.RCTWebViewBridge.Commands.reload,
null);

},

sendToBridge:function sendToBridge(message){
UIManager.dispatchViewManagerCommand(
this.getWebViewBridgeHandle(),
UIManager.RCTWebViewBridge.Commands.sendToBridge,
[message]);

},





updateNavigationState:function updateNavigationState(event){
if(this.props.onNavigationStateChange){
this.props.onNavigationStateChange(event.nativeEvent);
}
},

getWebViewBridgeHandle:function getWebViewBridgeHandle(){
return ReactNative.findNodeHandle(this.refs[RCT_WEBVIEWBRIDGE_REF]);
},

onLoadingStart:function onLoadingStart(event){
var onLoadStart=this.props.onLoadStart;
onLoadStart&&onLoadStart(event);
this.updateNavigationState(event);
},

onLoadingError:function onLoadingError(event){
event.persist();var _props3=
this.props,onError=_props3.onError,onLoadEnd=_props3.onLoadEnd;
onError&&onError(event);
onLoadEnd&&onLoadEnd(event);

this.setState({
lastErrorEvent:event.nativeEvent,
viewState:WebViewBridgeState.ERROR});

},

onLoadingFinish:function onLoadingFinish(event){var _props4=
this.props,onLoad=_props4.onLoad,onLoadEnd=_props4.onLoadEnd;
onLoad&&onLoad(event);
onLoadEnd&&onLoadEnd(event);
this.setState({
viewState:WebViewBridgeState.IDLE});

this.updateNavigationState(event);
}});



var styles=StyleSheet.create({
container:{
flex:1},

hidden:{
height:0,
flex:0}});



module.exports=WebViewBridge;