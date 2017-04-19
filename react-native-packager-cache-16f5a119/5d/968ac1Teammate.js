Object.defineProperty(exports,"__esModule",{value:true});




var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _JSONLinks=require('./../data/JSONLinks');var _JSONLinks2=babelHelpers.interopRequireDefault(_JSONLinks);
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);
var _reactNativeRouterFlux=require('react-native-router-flux');

var _reactNativeFlexboxGrid=require('react-native-flexbox-grid');
var _reactNativeImagePicker=require('react-native-image-picker');var _reactNativeImagePicker2=babelHelpers.interopRequireDefault(_reactNativeImagePicker);

var options={
title:'Select Avatar',
customButtons:[
{name:'fb',title:'Choose Photo from Facebook'}],

storageOptions:{
skipBackup:true,
path:'images'}};var



IndoRugby=function(_Component){babelHelpers.inherits(IndoRugby,_Component);
function IndoRugby(){babelHelpers.classCallCheck(this,IndoRugby);var _this=babelHelpers.possibleConstructorReturn(this,(IndoRugby.__proto__||Object.getPrototypeOf(IndoRugby)).call(this));

_this.state={
data:null,
animating:true,
avatarSource:null,
canLoad:true};return _this;

}babelHelpers.createClass(IndoRugby,[{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
fetch(_JSONLinks2.default.teammateJSON).
then(function(response){return response.json();}).
then(function(response){return _this2.setState({data:response});}).
catch(function(error){_this2.state.canLoad=false;_this2.forceUpdate();});
}},{key:'render',value:function render()

{var _this3=this;
if(this.state.canLoad==false){
return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.loader},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.loaderText},'Cannot connect to server')));


}else
if(!this.state.data){
return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.loader},
_react2.default.createElement(_reactNative.ActivityIndicator,{
animating:this.state.animating,
size:'large'}),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.loaderText},'Loading')));


}

var photos=this.state.data.data.map(function(photo,index){
if(index%2==0){
return(
_react2.default.createElement(_reactNativeFlexboxGrid.Row,{key:index,size:10,nowrap:true},
_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:5,md:5,lg:5},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this3.state.data.data[index]}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:5,md:5,lg:5},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.image,
source:{uri:_this3.state.data.data[index+1]}}))));




}
});
return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.Image,{source:require('./../../assets/images/sub-header-photo.png'),style:_Style2.default.headlineImage},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.backdropView},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.teammateHeadline},'TEAMMATE PHOTOS'))),


_react2.default.createElement(_reactNative.View,{style:_Style2.default.bStyle},
_react2.default.createElement(_reactNative.Button,{
color:'red',
onPress:takePhotoPressed,
title:'Take a Photo'}),




_react2.default.createElement(_reactNative.Image,{source:this.state.avatarSource,style:_Style2.default.uploadAvatar})),

_react2.default.createElement(_reactNative.View,{style:_Style2.default.bStyle},
_react2.default.createElement(_reactNative.Button,{

color:'red',
onPress:loadLibraryPressed,
title:'Load from Library'}),





_react2.default.createElement(_reactNative.Image,{source:this.state.avatarSource,style:_Style2.default.uploadAvatar})),



_react2.default.createElement(_reactNative.View,null,
photos)));



}},{key:'renderItem',value:function renderItem(

item,itemSize){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:item.id,
style:{width:itemSize,height:itemSize},
onPress:function onPress(){

}},
_react2.default.createElement(_reactNative.Image,{
resizeMode:'cover',
style:{flex:1},
source:{uri:item.src}})));


}}]);return IndoRugby;}(_react.Component);exports.default=IndoRugby;


var takePhotoPressed=function takePhotoPressed(){
_reactNativeImagePicker2.default.launchCamera(options,function(response){
console.log('Response = ',response);

if(response.didCancel){
console.log('User cancelled image picker');
}else
if(response.error){
console.log('ImagePicker Error: ',response.error);
}else
if(response.customButton){
console.log('User tapped custom button: ',response.customButton);
}else
{
console.log("nancy cantik",response.uri);




_reactNative.CameraRoll.saveToCameraRoll(response.path,'photo').then(function(result){
console.log('save succeeded '+result);
}).catch(function(error){
console.log('save failed '+error);
});
}
});
};

var loadLibraryPressed=function loadLibraryPressed(){
_reactNativeImagePicker2.default.launchImageLibrary(options,function(response){
console.log('Response = ',response);

if(response.didCancel){
console.log('User cancelled image picker');
}else
if(response.error){
console.log('ImagePicker Error: ',response.error);
}else
if(response.customButton){
console.log('User tapped custom button: ',response.customButton);
}else
{
console.log("nancy cantik",response.uri);
var source={uri:response.uri};








_reactNativeRouterFlux.Actions.editPhoto({asd:response.uri});
}
});
};

_reactNative.AppRegistry.registerComponent('IndoRugby',function(){return IndoRugby;});