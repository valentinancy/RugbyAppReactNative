Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNativeDrawer=require('react-native-drawer');var _reactNativeDrawer2=babelHelpers.interopRequireDefault(_reactNativeDrawer);
var _reactNativeRouterFlux=require('react-native-router-flux');

var _Menu=require('./Menu');var _Menu2=babelHelpers.interopRequireDefault(_Menu);

var propTypes={
navigationState:_react.PropTypes.object};var


NavigationDrawer=function(_React$Component){babelHelpers.inherits(NavigationDrawer,_React$Component);function NavigationDrawer(){babelHelpers.classCallCheck(this,NavigationDrawer);return babelHelpers.possibleConstructorReturn(this,(NavigationDrawer.__proto__||Object.getPrototypeOf(NavigationDrawer)).apply(this,arguments));}babelHelpers.createClass(NavigationDrawer,[{key:'render',value:function render()
{
var state=this.props.navigationState;
var children=state.children;
return(
_react2.default.createElement(_reactNativeDrawer2.default,{
ref:'navigation',
type:'displace',
onOpen:function onOpen(){return _reactNativeRouterFlux.Actions.refresh({key:state.key,open:true});},
onClose:function onClose(){return _reactNativeRouterFlux.Actions.refresh({key:state.key,open:false});},
content:_react2.default.createElement(_Menu2.default,null),
tapToClose:true,
openDrawerOffset:0.325,
panCloseMask:0.2,
closedDrawerOffset:-3,
negotiatePan:true,
tweenHandler:function tweenHandler(ratio){return{
main:{opacity:Math.max(0.54,1-ratio)}};},

side:'right'},

_react2.default.createElement(_reactNativeRouterFlux.DefaultRenderer,{navigationState:children[0],onNavigate:this.props.onNavigate})));


}}]);return NavigationDrawer;}(_react2.default.Component);


NavigationDrawer.propTypes=propTypes;exports.default=

NavigationDrawer;