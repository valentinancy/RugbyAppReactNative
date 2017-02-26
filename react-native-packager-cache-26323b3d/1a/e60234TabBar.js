Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');



var _reactNativeTabs=require('react-native-tabs');var _reactNativeTabs2=babelHelpers.interopRequireDefault(_reactNativeTabs);
var _DefaultRenderer=require('./DefaultRenderer');var _DefaultRenderer2=babelHelpers.interopRequireDefault(_DefaultRenderer);
var _Actions=require('./Actions');var _Actions2=babelHelpers.interopRequireDefault(_Actions);
var _TabbedView=require('./TabbedView');var _TabbedView2=babelHelpers.interopRequireDefault(_TabbedView);
var _Util=require('./Util');var

TabBar=function(_Component){babelHelpers.inherits(TabBar,_Component);










function TabBar(props,context){babelHelpers.classCallCheck(this,TabBar);var _this=babelHelpers.possibleConstructorReturn(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).call(this,
props,context));
_this.renderScene=_this.renderScene.bind(_this);return _this;
}babelHelpers.createClass(TabBar,[{key:'onSelect',value:function onSelect(

el){
if(!_Actions2.default[el.props.name]){
throw new Error(
'No action is defined for name='+el.props.name+' '+('actions: '+
JSON.stringify(Object.keys(_Actions2.default))));
}
if(typeof el.props.onPress==='function'){
el.props.onPress();
}else{
_Actions2.default[el.props.name]();
}
}},{key:'renderScene',value:function renderScene(

navigationState){
return(
_react2.default.createElement(_DefaultRenderer2.default,{
key:navigationState.key,
onNavigate:this.props.onNavigate,
navigationState:navigationState}));


}},{key:'render',value:function render()

{var _this2=this;
var state=this.props.navigationState;
var selected=state.children[state.index];

var hideTabBar=this.props.unmountScenes||
(0,_Util.deepestExplicitValueForKey)(state,'hideTabBar')||
this.props.hideOnChildTabs&&(0,_Util.deepestExplicitValueForKey)(selected,'tabs');

var contents=
_react2.default.createElement(_reactNativeTabs2.default,babelHelpers.extends({
style:state.tabBarStyle,
selectedIconStyle:state.tabBarSelectedItemStyle,
iconStyle:state.tabBarIconContainerStyle,
onSelect:this.onSelect},state,{
selected:selected.sceneKey,
pressOpacity:this.props.pressOpacity}),

state.children.filter(function(el){return el.icon||_this2.props.tabIcon;}).map(function(el){
var Icon=el.icon||_this2.props.tabIcon;
return _react2.default.createElement(Icon,babelHelpers.extends({},_this2.props,el));
}));


return(
_react2.default.createElement(_reactNative.View,{
style:{flex:1}},

_react2.default.createElement(_TabbedView2.default,{
navigationState:this.props.navigationState,
style:{flex:1},
renderScene:this.renderScene}),

!hideTabBar&&state.children.filter(function(el){return el.icon;}).length>0&&(
state.tabBarBackgroundImage?
_react2.default.createElement(_reactNative.Image,{source:state.tabBarBackgroundImage},
contents):

contents)));



}}]);return TabBar;}(_react.Component);TabBar.propTypes={navigationState:_react.PropTypes.object,tabIcon:_react.PropTypes.any,onNavigate:_react.PropTypes.func,unmountScenes:_react.PropTypes.bool,pressOpacity:_react.PropTypes.number,hideOnChildTabs:_react.PropTypes.bool};exports.default=



TabBar;