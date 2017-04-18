'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.screenSize=undefined;

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

function setScreenSize(){
var SCREEN_WIDTH=_reactNative.Dimensions.get('window').width;
var IPAD_WIDTH=768;
var IPAD_PRO_WIDTH=1024;

if(SCREEN_WIDTH<IPAD_WIDTH){
return'small';
}
if(SCREEN_WIDTH>=IPAD_WIDTH&&SCREEN_WIDTH<IPAD_PRO_WIDTH){
return'medium';
}
if(SCREEN_WIDTH>=IPAD_PRO_WIDTH){
return'large';
}
}

var screenSize=exports.screenSize=setScreenSize();