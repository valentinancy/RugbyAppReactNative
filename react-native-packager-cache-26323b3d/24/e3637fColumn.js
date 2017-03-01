'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _ScreenSize=require('../lib/ScreenSize');
var _helpers=require('../lib/helpers');
var _reactNative=require('react-native');var

Column=function(_Component){babelHelpers.inherits(Column,_Component);function Column(){babelHelpers.classCallCheck(this,Column);return babelHelpers.possibleConstructorReturn(this,(Column.__proto__||Object.getPrototypeOf(Column)).apply(this,arguments));}babelHelpers.createClass(Column,[{key:'render',value:function render()
{
if((0,_helpers.isHidden)(_ScreenSize.screenSize,this.props)){
return null;
}else{
return(
_react2.default.createElement(_reactNative.View,babelHelpers.extends({},
this.props,{
style:[this.props.style,{width:(0,_helpers.getComponentWidth)(_ScreenSize.screenSize,this.props),flexDirection:'column',marginLeft:(0,_helpers.getComponentOffset)(_ScreenSize.screenSize,this.props)}]}),
this.props.children));


}
}}]);return Column;}(_react.Component);exports.default=Column;


Column.propTypes={
sm:_react.PropTypes.number,
smOffset:_react.PropTypes.number,
smHidden:_react.PropTypes.bool,
md:_react.PropTypes.number,
mdOffset:_react.PropTypes.number,
mdHidden:_react.PropTypes.bool,
lg:_react.PropTypes.number,
lgOffset:_react.PropTypes.number,
lgHidden:_react.PropTypes.bool,
width:_react.PropTypes.number};