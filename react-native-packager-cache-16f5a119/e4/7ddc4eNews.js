Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');








var _reactNativeRouterFlux=require('react-native-router-flux');
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);
var _JSONLinks=require('./../data/JSONLinks');var _JSONLinks2=babelHelpers.interopRequireDefault(_JSONLinks);var

News=function(_Component){babelHelpers.inherits(News,_Component);

function News(props){babelHelpers.classCallCheck(this,News);var _this=babelHelpers.possibleConstructorReturn(this,(News.__proto__||Object.getPrototypeOf(News)).call(this,
props));
_this.state={
dataSource:null,
animating:true,
canLoad:true};return _this;

}babelHelpers.createClass(News,[{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
fetch(_JSONLinks2.default.newsJSON).
then(function(response){return response.json();}).
then(function(responseData){
_this2.setState({dataSource:new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(row1,row2){return row1!==row2;}}).
cloneWithRows(responseData)});
}).
catch(function(error){_this2.state.canLoad=false;_this2.forceUpdate();});
}},{key:'handleClick',value:function handleClick(

e,url){
_reactNativeRouterFlux.Actions.readMoreNews({url:url});
}},{key:'render',value:function render()


{var _this3=this;
if(this.state.canLoad==false){
return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.loader},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.loaderText},'Cannot connect to server')));


}else
if(!this.state.dataSource){
return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.loader},
_react2.default.createElement(_reactNative.ActivityIndicator,{
animating:this.state.animating,
size:'large'}),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.loaderText},'Loading')));


}
return(
_react2.default.createElement(_reactNative.ScrollView,{showsVerticalScrollIndicator:false},

_react2.default.createElement(_reactNative.Image,{source:require('./../../assets/images/sub-header-news.png'),style:_Style2.default.header},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.headline},'LATEST NEWS')),

_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.jsonLoaderContainer},
_react2.default.createElement(_reactNative.Image,{source:{uri:rowData.img},style:_Style2.default.newsImage}),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.newsTitle},rowData.title),
_react2.default.createElement(_reactNative.Text,null,
rowData.summary,'\xA0',
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.newsURL,onPress:function onPress(e){return _this3.handleClick(e,rowData.url);}},'read more...'))));}})));






}}]);return News;}(_react.Component);exports.default=



News;