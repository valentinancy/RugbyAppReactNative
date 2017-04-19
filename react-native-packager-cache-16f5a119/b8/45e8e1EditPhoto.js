Object.defineProperty(exports,"__esModule",{value:true});







var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _reactNativeFlexboxGrid=require('react-native-flexbox-grid');
var _reactNativeImagePicker=require('react-native-image-picker');var _reactNativeImagePicker2=babelHelpers.interopRequireDefault(_reactNativeImagePicker);











var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var

EditPhoto=function(_Component){babelHelpers.inherits(EditPhoto,_Component);function EditPhoto(){babelHelpers.classCallCheck(this,EditPhoto);return babelHelpers.possibleConstructorReturn(this,(EditPhoto.__proto__||Object.getPrototypeOf(EditPhoto)).apply(this,arguments));}babelHelpers.createClass(EditPhoto,[{key:'render',value:function render()







{




return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Image,{source:{uri:this.props.asd},style:_Style2.default.headlineImage})),

_react2.default.createElement(_reactNative.View,{style:_Style2.default.bStyle},






_react2.default.createElement(_FontAwesome2.default.Button,{name:'cloud-upload',backgroundColor:'#FF0000',onPress:this.uploadPhoto},'Submit')),



_react2.default.createElement(_reactNative.View,{style:_Style2.default.bStyle},






_react2.default.createElement(_FontAwesome2.default.Button,{name:'share',backgroundColor:'#FF0000',onPress:this.sharePhoto},'Share'))));





}}]);return EditPhoto;}(_react.Component);


var uploadPhoto=function uploadPhoto(){
_reactNative.Alert.alert('Button has been pressed!');
};

var sharePhoto=function sharePhoto(){
_reactNative.Alert.alert('Button has been pressed!');
};exports.default=

EditPhoto;