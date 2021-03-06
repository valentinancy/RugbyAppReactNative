var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');
var _Fixtures=require('./src/components/Fixtures');var _Fixtures2=babelHelpers.interopRequireDefault(_Fixtures);
var _ReadMoreFixtures=require('./src/components/ReadMoreFixtures');var _ReadMoreFixtures2=babelHelpers.interopRequireDefault(_ReadMoreFixtures);
var _Home=require('./src/components/Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _News=require('./src/components/News');var _News2=babelHelpers.interopRequireDefault(_News);
var _ReadMoreNews=require('./src/components/ReadMoreNews');var _ReadMoreNews2=babelHelpers.interopRequireDefault(_ReadMoreNews);
var _Teammate=require('./src/components/Teammate');var _Teammate2=babelHelpers.interopRequireDefault(_Teammate);
var _EditPhoto=require('./src/components/EditPhoto');var _EditPhoto2=babelHelpers.interopRequireDefault(_EditPhoto);
var _RugbyClubs=require('./src/components/RugbyClubs');var _RugbyClubs2=babelHelpers.interopRequireDefault(_RugbyClubs);
var _Rugby=require('./src/components/Rugby101');var _Rugby2=babelHelpers.interopRequireDefault(_Rugby);
var _NavigationDrawer=require('./src/components/NavigationDrawer');var _NavigationDrawer2=babelHelpers.interopRequireDefault(_NavigationDrawer);
var _rnSplashScreen=require('rn-splash-screen');var _rnSplashScreen2=babelHelpers.interopRequireDefault(_rnSplashScreen);
var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _Style=require('./assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var

App=function(_React$Component){babelHelpers.inherits(App,_React$Component);function App(){babelHelpers.classCallCheck(this,App);return babelHelpers.possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}babelHelpers.createClass(App,[{key:'componentDidMount',value:function componentDidMount()
{
_rnSplashScreen2.default.hide();
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNativeRouterFlux.Router,{
navigationBarStyle:{backgroundColor:'red'},
renderTitle:function renderTitle(){return _react2.default.createElement(_reactNative.Image,{source:require('./assets/images/logo-header.png'),
style:{height:40,resizeMode:'contain',marginVertical:7}});},

onLeft:function onLeft(){return _reactNativeRouterFlux.Actions.news();},
leftTitle:_react2.default.createElement(_FontAwesome2.default,{name:'home',size:25})},


_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'drawer',component:_NavigationDrawer2.default,open:false},
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'main',tabs:true},
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'home',component:_Home2.default,initial:true}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'news',component:_News2.default,sceneStyle:_Style2.default.sceneStyle}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'fixtures',component:_Fixtures2.default,sceneStyle:_Style2.default.sceneStyle}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'readMoreFixtures',component:_ReadMoreFixtures2.default,sceneStyle:_Style2.default.sceneStyle}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'teammate',component:_Teammate2.default,sceneStyle:_Style2.default.sceneStyle}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'rugbyClubs',component:_RugbyClubs2.default,sceneStyle:_Style2.default.sceneStyle}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'rugby101',component:_Rugby2.default,sceneStyle:_Style2.default.sceneStyle}),
_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'editphoto',component:_EditPhoto2.default,sceneStyle:_Style2.default.sceneStyle}),

_react2.default.createElement(_reactNativeRouterFlux.Scene,{key:'readMoreNews',component:_ReadMoreNews2.default,hideNavBar:true,onBack:function onBack(){return _react2.default.createElement(_News2.default,null);}})))));




}}]);return App;}(_react2.default.Component);


_reactNative.AppRegistry.registerComponent('Last',function(){return App;});