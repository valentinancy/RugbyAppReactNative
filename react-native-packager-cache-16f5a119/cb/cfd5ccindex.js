
var styles=require('./styles');
var ReactNative=require('react-native');
var React=require('react');var
Dimensions=ReactNative.Dimensions,Animated=ReactNative.Animated;
var deviceScreen=Dimensions.get('window');var


PanResponder=


ReactNative.PanResponder,View=ReactNative.View,TouchableWithoutFeedback=ReactNative.TouchableWithoutFeedback;






var barrierForward=deviceScreen.width/4;







function shouldOpenMenu(dx){
return dx>barrierForward;
}var

SideMenu=function(_React$Component){babelHelpers.inherits(SideMenu,_React$Component);
function SideMenu(props){babelHelpers.classCallCheck(this,SideMenu);var _this=babelHelpers.possibleConstructorReturn(this,(SideMenu.__proto__||Object.getPrototypeOf(SideMenu)).call(this,
props));






_this.prevLeft=0;
_this.isOpen=props.isOpen;

var initialMenuPositionMultiplier=props.menuPosition==='right'?-1:1;
var openOffsetMenuPercentage=props.openMenuOffset/deviceScreen.width;
var hiddenMenuOffsetPercentage=props.hiddenMenuOffset/deviceScreen.width;

_this.state={
width:deviceScreen.width,
height:deviceScreen.height,
openOffsetMenuPercentage:openOffsetMenuPercentage,
openMenuOffset:deviceScreen.width*openOffsetMenuPercentage,
hiddenMenuOffsetPercentage:hiddenMenuOffsetPercentage,
hiddenMenuOffset:deviceScreen.width*hiddenMenuOffsetPercentage,
left:new Animated.Value(
props.isOpen?props.openMenuOffset*initialMenuPositionMultiplier:props.hiddenMenuOffset)};return _this;


}babelHelpers.createClass(SideMenu,[{key:'componentWillMount',value:function componentWillMount()





{
this.responder=PanResponder.create({
onStartShouldSetResponderCapture:this.props.onStartShouldSetResponderCapture.bind(this),
onMoveShouldSetPanResponder:this.handleMoveShouldSetPanResponder.bind(this),
onPanResponderMove:this.handlePanResponderMove.bind(this),
onPanResponderRelease:this.handlePanResponderEnd.bind(this)});

}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
if(this.isOpen!==props.isOpen){
this.openMenu(props.isOpen);
}
}},{key:'gesturesAreEnabled',value:function gesturesAreEnabled()





{var
disableGestures=this.props.disableGestures;

if(typeof disableGestures==='function'){
return!disableGestures();
}

return!disableGestures;
}},{key:'handleMoveShouldSetPanResponder',value:function handleMoveShouldSetPanResponder(





e,gestureState){
if(this.gesturesAreEnabled()){
var x=Math.round(Math.abs(gestureState.dx));
var y=Math.round(Math.abs(gestureState.dy));

var touchMoved=x>this.props.toleranceX&&y<this.props.toleranceY;

if(this.isOpen){
return touchMoved;
}

var withinEdgeHitWidth=this.props.menuPosition==='right'?
gestureState.moveX>deviceScreen.width-this.props.edgeHitWidth:
gestureState.moveX<this.props.edgeHitWidth;

var swipingToOpen=this.menuPositionMultiplier()*gestureState.dx>0;
return withinEdgeHitWidth&&touchMoved&&swipingToOpen;
}

return false;
}},{key:'handlePanResponderMove',value:function handlePanResponderMove(







e,gestureState){
if(this.state.left.__getValue()*this.menuPositionMultiplier()>=0){
var newLeft=this.prevLeft+gestureState.dx;

if(!this.props.bounceBackOnOverdraw&&Math.abs(newLeft)>this.state.openMenuOffset){
newLeft=this.menuPositionMultiplier()*this.state.openMenuOffset;
}

this.props.onMove(newLeft);
this.state.left.setValue(newLeft);
}
}},{key:'handlePanResponderEnd',value:function handlePanResponderEnd(







e,gestureState){
var offsetLeft=this.menuPositionMultiplier()*(
this.state.left.__getValue()+gestureState.dx);

this.openMenu(shouldOpenMenu(offsetLeft));
}},{key:'menuPositionMultiplier',value:function menuPositionMultiplier()





{
return this.props.menuPosition==='right'?-1:1;
}},{key:'moveLeft',value:function moveLeft(

offset){
var newOffset=this.menuPositionMultiplier()*offset;

this.props.
animationFunction(this.state.left,newOffset).
start();

this.prevLeft=newOffset;
}},{key:'openMenu',value:function openMenu(





isOpen){var _state=
this.state,hiddenMenuOffset=_state.hiddenMenuOffset,openMenuOffset=_state.openMenuOffset;
this.moveLeft(isOpen?openMenuOffset:hiddenMenuOffset);
this.isOpen=isOpen;

this.forceUpdate();
this.props.onChange(isOpen);
}},{key:'getContentView',value:function getContentView()





{var _this2=this;
var overlay=null;

if(this.isOpen){
overlay=
React.createElement(TouchableWithoutFeedback,{onPress:function onPress(){return _this2.openMenu(false);}},
React.createElement(View,{style:styles.overlay}));


}var _state2=

this.state,width=_state2.width,height=_state2.height;
var ref=function ref(sideMenu){return _this2.sideMenu=sideMenu;};
var style=[
styles.frontView,
{width:width,height:height},
this.props.animationStyle(this.state.left)];


return(
React.createElement(Animated.View,babelHelpers.extends({style:style,ref:ref},this.responder.panHandlers),
this.props.children,
overlay));


}},{key:'onLayoutChange',value:function onLayoutChange(

e){var _e$nativeEvent$layout=
e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;
var openMenuOffset=width*this.state.openOffsetMenuPercentage;
var hiddenMenuOffset=width*this.state.hiddenMenuOffsetPercentage;
this.setState({width:width,height:height,openMenuOffset:openMenuOffset,hiddenMenuOffset:hiddenMenuOffset});
}},{key:'render',value:function render()





{

var boundryStyle=this.props.menuPosition=='right'?
{left:this.state.width-this.state.openMenuOffset}:
{right:this.state.width-this.state.openMenuOffset};

var menu=React.createElement(View,{style:[styles.menu,boundryStyle]},this.props.menu);

return(
React.createElement(View,{style:styles.container,onLayout:this.onLayoutChange.bind(this)},
menu,
this.getContentView()));


}}]);return SideMenu;}(React.Component);


SideMenu.propTypes={
edgeHitWidth:React.PropTypes.number,
toleranceX:React.PropTypes.number,
toleranceY:React.PropTypes.number,
menuPosition:React.PropTypes.oneOf(['left','right']),
onChange:React.PropTypes.func,
onMove:React.PropTypes.func,
openMenuOffset:React.PropTypes.number,
hiddenMenuOffset:React.PropTypes.number,
disableGestures:React.PropTypes.oneOfType([React.PropTypes.func,React.PropTypes.bool]),
animationFunction:React.PropTypes.func,
onStartShouldSetResponderCapture:React.PropTypes.func,
isOpen:React.PropTypes.bool,
bounceBackOnOverdraw:React.PropTypes.bool};


SideMenu.defaultProps={
toleranceY:10,
toleranceX:10,
edgeHitWidth:60,
openMenuOffset:deviceScreen.width*2/3,
hiddenMenuOffset:0,
onMove:function onMove(){},
onStartShouldSetResponderCapture:function onStartShouldSetResponderCapture(){return true;},
onChange:function onChange(){},
animationStyle:function animationStyle(value){
return{
transform:[{
translateX:value}]};


},
animationFunction:function animationFunction(prop,value){
return Animated.spring(
prop,
{
toValue:value,
friction:8});


},
isOpen:false,
bounceBackOnOverdraw:true};


module.exports=SideMenu;