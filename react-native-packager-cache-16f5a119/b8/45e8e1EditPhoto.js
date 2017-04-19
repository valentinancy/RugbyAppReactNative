Object.defineProperty(exports,"__esModule",{value:true});







var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _reactNativeFlexboxGrid=require('react-native-flexbox-grid');
var _reactNativeImagePicker=require('react-native-image-picker');var _reactNativeImagePicker2=babelHelpers.interopRequireDefault(_reactNativeImagePicker);












var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var

EditPhoto=function(_Component){babelHelpers.inherits(EditPhoto,_Component);function EditPhoto(){babelHelpers.classCallCheck(this,EditPhoto);return babelHelpers.possibleConstructorReturn(this,(EditPhoto.__proto__||Object.getPrototypeOf(EditPhoto)).apply(this,arguments));}babelHelpers.createClass(EditPhoto,[{key:'render',value:function render()












{var _this2=this;




var photos=this.state.data.data.map(function(photo,index){
if(index%2==0){
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNativeFlexboxGrid.Row,{key:index,size:10,nowrap:true},
_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+1]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+2]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+3]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+4]}}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Row,{key:index,size:10,nowrap:true},
_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+1]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+2]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+3]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this2.state.data.data[index+4]}})))));





}
});


return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.Image,{source:require('./../../assets/images/sub-header-photo.png'),style:_Style2.default.headlineImage},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.backdropView},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.teammateHeadline},'TEAMMATE PHOTOS'))),



_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Image,{source:{uri:this.props.asd},style:_Style2.default.headlineImage})),


















_react2.default.createElement(_reactNative.View,{style:_Style2.default.bStyle},
_react2.default.createElement(_reactNative.Button,{
color:'red',

onPress:uploadPhoto,
title:'Submit'})),





_react2.default.createElement(_reactNative.View,{style:_Style2.default.bStyle},
_react2.default.createElement(_reactNative.Button,{

color:'red',
onPress:sharePhoto,
title:'Share'}))));







}}]);return EditPhoto;}(_react.Component);


var uploadPhoto=function uploadPhoto(){
_reactNative.Alert.alert('Button has been pressed!');
};

var sharePhoto=function sharePhoto(){
_reactNative.Alert.alert('Button has been pressed!');
};exports.default=

EditPhoto;