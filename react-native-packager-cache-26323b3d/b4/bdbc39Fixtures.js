Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var screenWidth=_reactNative.Dimensions.get('window').width;var

Fixtures=function(_Component){babelHelpers.inherits(Fixtures,_Component);function Fixtures(){babelHelpers.classCallCheck(this,Fixtures);return babelHelpers.possibleConstructorReturn(this,(Fixtures.__proto__||Object.getPrototypeOf(Fixtures)).apply(this,arguments));}babelHelpers.createClass(Fixtures,[{key:'render',value:function render()
{
var banner1={
uri:'http://rugbyindonesia.or.id/wp-content/uploads/2016/03/1-Jakarta-XV-Banner-1024x343.jpg'};

var banner2={
uri:'http://rugbyindonesia.or.id/wp-content/uploads/2016/03/2-Jakarta-10s-Banner-1024x343.jpg'};

var banner3={
uri:'http://rugbyindonesia.or.id/wp-content/uploads/2016/03/3-Nusnatara-7s-1024x343.jpg'};

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{source:banner1,style:styles.imgBanner}),
_react2.default.createElement(_reactNative.Image,{source:banner2,style:styles.imgBanner}),
_react2.default.createElement(_reactNative.Image,{source:banner3,style:styles.imgBanner})));


}}]);return Fixtures;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
flexDirection:'column',
margin:15},

imgBanner:{
flex:1,
width:screenWidth-30,
height:null,
resizeMode:'contain',
marginVertical:30}});exports.default=



Fixtures;