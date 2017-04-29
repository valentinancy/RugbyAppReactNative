Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);

var ImageResizerAndroid=_reactNative2.default.NativeModules.ImageResizerAndroid;exports.default=

{
createResizedImage:function createResizedImage(imagePath,newWidth,newHeight,compressFormat,quality){var rotation=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;var outputPath=arguments[6];
return new Promise(function(resolve,reject){
ImageResizerAndroid.createResizedImage(imagePath,newWidth,newHeight,
compressFormat,quality,rotation,outputPath,resolve,reject);
});
}};