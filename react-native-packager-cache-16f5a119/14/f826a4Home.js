Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');
var _reactNativeSideMenu=require('react-native-side-menu');var _reactNativeSideMenu2=babelHelpers.interopRequireDefault(_reactNativeSideMenu);
var _Menu=require('./Menu');var _Menu2=babelHelpers.interopRequireDefault(_Menu);
var _News=require('./News');var _News2=babelHelpers.interopRequireDefault(_News);
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var


Button=function(_Component){babelHelpers.inherits(Button,_Component);function Button(){babelHelpers.classCallCheck(this,Button);return babelHelpers.possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}babelHelpers.createClass(Button,[{key:'handlePress',value:function handlePress(
e){
if(this.props.onPress){
this.props.onPress(e);
}
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
onPress:this.handlePress.bind(this),
style:this.props.style},
_react2.default.createElement(_reactNative.Text,null,this.props.children)));


}}]);return Button;}(_react.Component);var


Home=function(_Component2){babelHelpers.inherits(Home,_Component2);function Home(){var _ref;var _temp,_this2,_ret;babelHelpers.classCallCheck(this,Home);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this2=babelHelpers.possibleConstructorReturn(this,(_ref=Home.__proto__||Object.getPrototypeOf(Home)).call.apply(_ref,[this].concat(args))),_this2),_this2.

state={
isOpen:false,
selectedItem:''},_this2.












onMenuItemSelected=function(item){
_this2.setState({
isOpen:false,
selectedItem:item});

},_temp),babelHelpers.possibleConstructorReturn(_this2,_ret);}babelHelpers.createClass(Home,[{key:'toggle',value:function toggle(){this.setState({isOpen:!this.state.isOpen});}},{key:'updateMenuState',value:function updateMenuState(isOpen){this.setState({isOpen:isOpen});}},{key:'render',value:function render()


{var _this3=this;

var menu=_react2.default.createElement(_Menu2.default,{onItemSelected:this.onMenuItemSelected});

return(
_react2.default.createElement(_reactNativeSideMenu2.default,{
menu:menu,
isOpen:this.state.isOpen,
onChange:function onChange(isOpen){return _this3.updateMenuState(isOpen);},
menuPosition:'right'},

_react2.default.createElement(_reactNative.View,{style:_Style2.default.homeContainer},
_react2.default.createElement(_News2.default,null)),


_react2.default.createElement(Button,{style:_Style2.default.button,onPress:function onPress(){return _this3.toggle();}},
_react2.default.createElement(_reactNative.Image,{
source:require('../../assets/images/menu.png'),style:{width:70,height:70}}))));



}}]);return Home;}(_react.Component);exports.default=


Home;