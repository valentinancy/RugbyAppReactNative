Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeRouterFlux=require('react-native-router-flux');
var _Style=require('./../../assets/styles/Style');var _Style2=babelHelpers.interopRequireDefault(_Style);

var window=_reactNative.Dimensions.get('window');var

Menu=function(_Component){babelHelpers.inherits(Menu,_Component);function Menu(){babelHelpers.classCallCheck(this,Menu);return babelHelpers.possibleConstructorReturn(this,(Menu.__proto__||Object.getPrototypeOf(Menu)).apply(this,arguments));}babelHelpers.createClass(Menu,[{key:'handleClick',value:function handleClick(




e,page){
switch(page){
case'news':
_reactNativeRouterFlux.Actions.news();
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
case'rugby101':
_reactNativeRouterFlux.Actions.rugby101();
break;
default:
_reactNativeRouterFlux.Actions.home();}

}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.ScrollView,{scrollsToTop:false,style:_Style2.default.menu},







_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'news');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/timeline.png')}),'News'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'fixtures');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/fixture.png')}),'Fixtures & Result'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'teammate');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/photo.png')}),'Teammate Photos'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'rugby101');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/rugby101.png')}),'Rugby 101'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'rugbyClubs');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/clubs.png')}),'Rugby Clubs'))))));







}}]);return Menu;}(_react.Component);Menu.propTypes={onItemSelected:_react2.default.PropTypes.func.isRequired};exports.default=


Menu;