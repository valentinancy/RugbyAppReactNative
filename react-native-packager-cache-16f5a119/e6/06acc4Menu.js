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
_react2.default.createElement(_reactNative.View,{style:_Style2.default.menuIconView},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/timeline.png')})),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},'News'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'fixtures');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.menuIconView},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/timeline.png')})),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},'Fixtures & Result'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'teammate');},style:_Style2.default.touchOverlay,underlayColor:'white'},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.menuIconView},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/photo.png')})),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},'Teammate Photos'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'rugby101');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.menuIconView},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/rugby101.png')})),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},'Rugby 101'))),




_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(e){return _this2.handleClick(e,'rugbyClubs');}},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.itemContainer},
_react2.default.createElement(_reactNative.View,{style:_Style2.default.menuIconView},
_react2.default.createElement(_reactNative.Image,{style:_Style2.default.menuIcon,source:require('./../../assets/images/clubs.png')})),

_react2.default.createElement(_reactNative.Text,{style:_Style2.default.item},'Rugby Clubs'))),




_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'Contact:'),
_react2.default.createElement(_reactNative.Text,null,' '),
_react2.default.createElement(_reactNative.Text,null,'info@rugbyindonesia.or.id'),
_react2.default.createElement(_reactNative.Text,null,'www.rugbyindonesia.or.id')),

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'Connect with us:')),

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'Affiliations')),

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'\xA9 2016 Persatuan Rugby Union Indonesia')),

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'Powered by Lorem Ipsum'),
_react2.default.createElement(_reactNative.Image,{source:require('./../../assets/images/sponsor.png'),style:_Style2.default.sidebarLogo})))));




}}]);return Menu;}(_react.Component);Menu.propTypes={onItemSelected:_react2.default.PropTypes.func.isRequired};exports.default=


Menu;