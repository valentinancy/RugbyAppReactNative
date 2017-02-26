var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');
var _Fixtures=require('./src/components/Fixtures');var _Fixtures2=babelHelpers.interopRequireDefault(_Fixtures);
var _Home=require('./src/components/Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _News=require('./src/components/News');var _News2=babelHelpers.interopRequireDefault(_News);
var _ReadMoreNews=require('./src/components/ReadMoreNews');var _ReadMoreNews2=babelHelpers.interopRequireDefault(_ReadMoreNews);
var _Teammate=require('./src/components/Teammate');var _Teammate2=babelHelpers.interopRequireDefault(_Teammate);
var _RugbyClubs=require('./src/components/RugbyClubs');var _RugbyClubs2=babelHelpers.interopRequireDefault(_RugbyClubs);var

App=function(_React$Component){babelHelpers.inherits(App,_React$Component);function App(){babelHelpers.classCallCheck(this,App);return babelHelpers.possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}babelHelpers.createClass(App,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNativeRouterFlux.Router,{sceneStyle:{paddingTop:60}},
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'home',component:_Home2.default,initial:true}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'fixtures',component:_Fixtures2.default}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'news',component:_News2.default}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'readMoreNews',component:_ReadMoreNews2.default}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'teammate',component:_Teammate2.default}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'rugbyClubs',component:_RugbyClubs2.default})));


}}]);return App;}(_react2.default.Component);


_reactNative.AppRegistry.registerComponent('Last',function(){return App;});