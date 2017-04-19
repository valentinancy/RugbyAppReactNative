Object.defineProperty(exports,"__esModule",{value:true});







var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _reactNativeFlexboxGrid=require('react-native-flexbox-grid');
var _reactNativeImagePicker=require('react-native-image-picker');var _reactNativeImagePicker2=babelHelpers.interopRequireDefault(_reactNativeImagePicker);












var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var

EditPhoto=function(_Component){babelHelpers.inherits(EditPhoto,_Component);
function EditPhoto(){babelHelpers.classCallCheck(this,EditPhoto);var _this=babelHelpers.possibleConstructorReturn(this,(EditPhoto.__proto__||Object.getPrototypeOf(EditPhoto)).call(this));

_this.state={
frame:null};return _this;

}babelHelpers.createClass(EditPhoto,[{key:'render',value:function render()

{



return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.Image,{source:require('./../../assets/images/sub-header-photo.png'),style:_Style2.default.headlineImage},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.backdropView},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.teammateHeadline},'TEAMMATE PHOTOS'))),



_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.View,{style:_Style2.default.choosenImageView},
_react2.default.createElement(_reactNative.Image,{source:{uri:this.props.asd},style:_Style2.default.choosenImage})),

















_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameGroup},
_react2.default.createElement(_reactNativeFlexboxGrid.Row,{size:10,nowrap:true},
_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame01.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame02.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame03.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame04.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame05.png')})))),




_react2.default.createElement(_reactNativeFlexboxGrid.Row,{size:10,nowrap:true},
_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame06.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame07.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame08.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame09.png')}))),



_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:2,md:2,lg:2},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.frameImageView},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.frameImage,
source:require('./../../assets/images/frame10.png')})))))),









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