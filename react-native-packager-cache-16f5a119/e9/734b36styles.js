var React=require('react-native');var


StyleSheet=
React.StyleSheet;

var absoluteStretch={
position:'absolute',
top:0,
left:0,
bottom:0,
right:0};


module.exports=StyleSheet.create({
container:babelHelpers.extends({},
absoluteStretch,{
justifyContent:'center'}),

menu:babelHelpers.extends({},
absoluteStretch),

frontView:{
flex:1,
position:'absolute',
left:0,
top:0,
backgroundColor:'transparent'},

overlay:babelHelpers.extends({},
absoluteStretch,{
backgroundColor:'transparent'})});