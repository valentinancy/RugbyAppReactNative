Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);var

Rugby101=function(_Component){babelHelpers.inherits(Rugby101,_Component);function Rugby101(){babelHelpers.classCallCheck(this,Rugby101);return babelHelpers.possibleConstructorReturn(this,(Rugby101.__proto__||Object.getPrototypeOf(Rugby101)).apply(this,arguments));}babelHelpers.createClass(Rugby101,[{key:'render',value:function render()
{

return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.header,
source:require('./../../assets/images/sub-header-101.png')},
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.headline},'RUGBY 101'))),


_react2.default.createElement(_reactNative.View,{style:_Style2.default.rugby101Container},
_react2.default.createElement(_reactNative.Text,null,'Coming soon!'))));



}}]);return Rugby101;}(_react.Component);exports.default=


Rugby101;