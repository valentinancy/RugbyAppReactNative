'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _ScreenSize=require('../lib/ScreenSize');
var _helpers=require('../lib/helpers');
var _reactNative=require('react-native');var

Row=function(_Component){babelHelpers.inherits(Row,_Component);
function Row(props){babelHelpers.classCallCheck(this,Row);var _this=babelHelpers.possibleConstructorReturn(this,(Row.__proto__||Object.getPrototypeOf(Row)).call(this,
props));
_this.state={
width:0};return _this;

}babelHelpers.createClass(Row,[{key:'_getWidth',value:function _getWidth(

res){
this.setState({width:res.nativeEvent.layout.width});
}},{key:'_cloneElements',value:function _cloneElements()

{var _this2=this;

if(this.state.width>0){var _ret=function(){

var rowSize=_this2.props.size>0?_this2.props.size:12;

return{v:_react2.default.Children.map(_this2.props.children,function(element){
return _react2.default.cloneElement(element,{parentWidth:_this2.state.width,rowSize:rowSize});
})};}();if(typeof _ret==="object")return _ret.v;
}
}},{key:'render',value:function render()

{
if((0,_helpers.isHidden)(_ScreenSize.screenSize,this.props)){
return null;
}else{
return(
_react2.default.createElement(_reactNative.View,babelHelpers.extends({},this.props,{
onLayout:this._getWidth.bind(this),
style:[this.props.style,
{flexDirection:'row',
flexWrap:this.props.nowrap?'nowrap':'wrap',
alignItems:this.props.alignItems,
justifyContent:this.props.justifyContent}]}),
this._cloneElements()));


}
}}]);return Row;}(_react.Component);exports.default=Row;


Row.propTypes={
size:_react.PropTypes.number,
nowrap:_react.PropTypes.bool,
smHidden:_react.PropTypes.bool,
mdHidden:_react.PropTypes.bool,
lgHidden:_react.PropTypes.bool};