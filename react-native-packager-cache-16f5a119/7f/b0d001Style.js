var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var window=_reactNative.Dimensions.get('window');

var styles=_reactNative.StyleSheet.create({


container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

header:{
width:window.width,
height:100},

headline:{
fontSize:30,
marginTop:40,
color:'#f0f8ff',
textAlign:'center',
fontWeight:'bold'},

loader:{
marginTop:window.height/2-80,
alignItems:'center'},

loaderText:{
fontSize:20,
marginTop:15},

jsonLoaderContainer:{
flex:1,
margin:15},



menu:{
flex:1,
width:window.width,
height:window.height,
backgroundColor:'beige',
padding:20,
marginTop:40},

item:{
fontSize:14,
fontWeight:'300',
paddingTop:20},



button:{
position:'absolute',
top:50,
right:0,
padding:10},

homeContainer:{
flex:1,
marginTop:55,

alignItems:'center',
backgroundColor:'#F5FCFF'},



newsTitle:{
fontWeight:'bold'},

newsImage:{
width:window.width*.92,
height:200},

newsURL:{
color:'blue',
fontStyle:'italic',
textDecorationLine:'underline'},



imgBanner:{
width:window.width*.92,
height:130,
resizeMode:'stretch'},

























clubName:{
fontSize:18,
fontWeight:'bold'},

clubDesc:{
fontSize:14},

clubNameDiv:{
marginBottom:10},

logo:{
width:80,
height:80,
marginTop:10,
marginLeft:15},

clubDiv:{
marginTop:25},















list:{
justifyContent:'center',
flexDirection:'row',
flexWrap:'wrap'},

teammateHeadline:{
fontSize:30,
textAlign:'center',
marginTop:5,
color:'#f0f8ff',
fontWeight:'bold'},

headlineImage:{
paddingTop:20,
width:360,
height:120,
marginBottom:20},

bStyle:{


marginBottom:10},

bText:{

justifyContent:'center',
alignItems:'center'},



instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5},

backdropView:{
height:120,
width:320,
backgroundColor:'rgba(0,0,0,0)',
alignItems:'center',
justifyContent:'center'},

image:{
width:150,
height:150,
marginLeft:17,
marginBottom:10},














rugby101Container:{
marginTop:10,
marginLeft:10},



viewStyle:{
backgroundColor:'#F8F8F8',
justifyContent:'center',
alignItems:'center',
height:60,
paddingTop:15,
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.2},

textStyle:{
fontSize:20},



customnav:{
position:'relative',
top:0,
right:0,
padding:10}});




module.exports=styles;