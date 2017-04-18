Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);

var window=_reactNative.Dimensions.get('window');var

Menu=function(_Component){babelHelpers.inherits(Menu,_Component);function Menu(){babelHelpers.classCallCheck(this,Menu);return babelHelpers.possibleConstructorReturn(this,(Menu.__proto__||Object.getPrototypeOf(Menu)).apply(this,arguments));}babelHelpers.createClass(Menu,[{key:'handleClick',value:function handleClick(




e,page){
switch(page){
case'news':
_reactNativeRouterFlux.Actions.news();
break;
case'fixtures':
_reactNativeRouterFlux.Actions.fixtures();
break;
case'teammate':
_reactNativeRouterFlux.Actions.teammate();
break;
case'rugbyClubs':
_reactNativeRouterFlux.Actions.rugbyClubs();
break;
case'rugby101':
_reactNativeRouterFlux.Actions.rugby101();
break;
default:
_reactNativeRouterFlux.Actions.home();}

}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.ScrollView,{scrollsToTop:false,style:_Style2.default.menu},
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item,onPress:function onPress(e){return _this2.handleClick(e,'news');}},'News'),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item,onPress:function onPress(e){return _this2.handleClick(e,'fixtures');}},'Fixtures and Result'),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item,onPress:function onPress(e){return _this2.handleClick(e,'teammate');}},'Teammate Photos'),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item,onPress:function onPress(e){return _this2.handleClick(e,'rugbyClubs');}},'Rugby Clubs'),
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item,onPress:function onPress(e){return _this2.handleClick(e,'rugby101');}},'Rugby 101'))));



}}]);return Menu;}(_react.Component);Menu.propTypes={onItemSelected:_react2.default.PropTypes.func.isRequired};exports.default=


Menu;