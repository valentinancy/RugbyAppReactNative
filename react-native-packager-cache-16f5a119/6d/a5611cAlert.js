










'use strict';

var AlertIOS=require('AlertIOS');
var Platform=require('Platform');
var DialogModuleAndroid=require('NativeModules').DialogManagerAndroid;var

























































Alert=function(){function Alert(){babelHelpers.classCallCheck(this,Alert);}babelHelpers.createClass(Alert,null,[{key:'alert',value:function alert(


title,
message,
buttons,
options,
type)
{
if(Platform.OS==='ios'){
if(typeof type!=='undefined'){
console.warn('Alert.alert() with a 5th "type" parameter is deprecated and will be removed. Use AlertIOS.prompt() instead.');
AlertIOS.alert(title,message,buttons,type);
return;
}
AlertIOS.alert(title,message,buttons);
}else if(Platform.OS==='android'){
AlertAndroid.alert(title,message,buttons,options);
}
}}]);return Alert;}();var





AlertAndroid=function(){function AlertAndroid(){babelHelpers.classCallCheck(this,AlertAndroid);}babelHelpers.createClass(AlertAndroid,null,[{key:'alert',value:function alert(


title,
message,
buttons,
options)
{
var config={
title:title||'',
message:message||''};


if(options){
config=babelHelpers.extends({},config,{cancelable:options.cancelable});
}


var validButtons=buttons?buttons.slice(0,3):[{text:'OK'}];
var buttonPositive=validButtons.pop();
var buttonNegative=validButtons.pop();
var buttonNeutral=validButtons.pop();
if(buttonNeutral){
config=babelHelpers.extends({},config,{buttonNeutral:buttonNeutral.text||''});
}
if(buttonNegative){
config=babelHelpers.extends({},config,{buttonNegative:buttonNegative.text||''});
}
if(buttonPositive){
config=babelHelpers.extends({},config,{buttonPositive:buttonPositive.text||''});
}
DialogModuleAndroid.showAlert(
config,
function(errorMessage){return console.warn(errorMessage);},
function(action,buttonKey){
if(action!==DialogModuleAndroid.buttonClicked){
return;
}
if(buttonKey===DialogModuleAndroid.buttonNeutral){
buttonNeutral.onPress&&buttonNeutral.onPress();
}else if(buttonKey===DialogModuleAndroid.buttonNegative){
buttonNegative.onPress&&buttonNegative.onPress();
}else if(buttonKey===DialogModuleAndroid.buttonPositive){
buttonPositive.onPress&&buttonPositive.onPress();
}
});

}}]);return AlertAndroid;}();


module.exports=Alert;