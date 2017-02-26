Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');var

Home=function(_Component){babelHelpers.inherits(Home,_Component);function Home(){babelHelpers.classCallCheck(this,Home);return babelHelpers.possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));}babelHelpers.createClass(Home,[{key:'handleClick',value:function handleClick(
e,page){
switch(page){
case'news':
_reactNativeRouterFlux.Actions.news();
break;
case'readMoreNews':
_reactNativeRouterFlux.Actions.readMoreNews();
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
default:
_reactNativeRouterFlux.Actions.home();}

}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,{onPress:function onPress(e){return _this2.handleClick(e,'news');}},'News'),
_react2.default.createElement(_reactNative.Text,{onPress:function onPress(e){return _this2.handleClick(e,'readMoreNews');}},'Read More News'),
_react2.default.createElement(_reactNative.Text,{onPress:function onPress(e){return _this2.handleClick(e,'fixtures');}},'Fixtures and Result'),
_react2.default.createElement(_reactNative.Text,{onPress:function onPress(e){return _this2.handleClick(e,'teammate');}},'Teammate and Photos'),
_react2.default.createElement(_reactNative.Text,{onPress:function onPress(e){return _this2.handleClick(e,'rugbyClubs');}},'Rugby Clubs')));


}}]);return Home;}(_react.Component);exports.default=


Home;