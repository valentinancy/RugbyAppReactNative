Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeFlexboxGrid=require('react-native-flexbox-grid');
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var

RugbyClubs=function(_Component){babelHelpers.inherits(RugbyClubs,_Component);
function RugbyClubs(props){babelHelpers.classCallCheck(this,RugbyClubs);var _this=babelHelpers.possibleConstructorReturn(this,(RugbyClubs.__proto__||Object.getPrototypeOf(RugbyClubs)).call(this,
props));
_this.state={
data:null,
animating:true,
canLoad:true};return _this;

}babelHelpers.createClass(RugbyClubs,[{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
fetch('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json').
then(function(response){return response.json();}).
then(function(response){return _this2.setState({data:response});}).
catch(function(error){_this2.state.canLoad=false;_this2.forceUpdate();});
}},{key:'render',value:function render()

{
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

var clubs=this.state.data.map(function(club){
var location=club.location_training.map(function(loc){
return _react2.default.createElement(_reactNative.View,{key:loc},_react2.default.createElement(_reactNative.Text,{style:_Style2.default.clubDesc},loc));
});

return(
_react2.default.createElement(_reactNative.View,{style:_Style2.default.clubDiv,key:club.name},
_react2.default.createElement(_reactNativeFlexboxGrid.Row,{size:10,nowrap:true},
_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:3,md:4,lg:1},
_react2.default.createElement(_reactNative.Image,{
style:_Style2.default.logo,
source:{uri:club.img}})),


_react2.default.createElement(_reactNativeFlexboxGrid.Column,{sm:6,md:4,lg:3},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.clubNameDiv},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.clubName},' ',club.name,' ')),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.clubDesc},'Location and Training:'),
location,
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.clubDesc},'Website: www.balirugbyclub.com'),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.clubDesc},club.contacts[0].name,' : ',club.contacts[0].value)))));




});

return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.header,
source:require('./../../assets/images/sub-header-clubs.png')},
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.headline},'RUGBY CLUBS'))),


clubs));


}}]);return RugbyClubs;}(_react.Component);exports.default=


RugbyClubs;