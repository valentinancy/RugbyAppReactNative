Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);
var _JSONLinks=require('./../data/JSONLinks');var _JSONLinks2=babelHelpers.interopRequireDefault(_JSONLinks);var

Fixtures=function(_Component){babelHelpers.inherits(Fixtures,_Component);
function Fixtures(props){babelHelpers.classCallCheck(this,Fixtures);var _this=babelHelpers.possibleConstructorReturn(this,(Fixtures.__proto__||Object.getPrototypeOf(Fixtures)).call(this,
props));
_this.state={
data:null,
animating:true,
canLoad:true};return _this;

}babelHelpers.createClass(Fixtures,[{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
fetch(_JSONLinks2.default.fixturesJSON).
then(function(response){return response.json();}).
then(function(response){
_this2.setState({data:new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(row1,row2){return row1!==row2;}}).
cloneWithRows(response)});
}).catch(function(error){_this2.state.canLoad=false;_this2.forceUpdate();});
}},{key:'handleClick',value:function handleClick(

e,url){
_reactNativeRouterFlux.Actions.readMoreFixtures({url:url});
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
return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.Image,{source:require('./../../assets/images/sub-header-fixture.png'),style:_Style2.default.header},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.headline},'FIXTURES & RESULT')),

_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.data,
renderRow:function renderRow(rowData){return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.jsonLoaderContainer},
_react2.default.createElement(_reactNative.TouchableNativeFeedback,{onPress:function onPress(e){return _this3.handleClick(e,rowData.url);}},
_react2.default.createElement(_reactNative.Image,{source:{uri:rowData.img},style:_Style2.default.imgBanner}))));}})));





}}]);return Fixtures;}(_react.Component);exports.default=


Fixtures;