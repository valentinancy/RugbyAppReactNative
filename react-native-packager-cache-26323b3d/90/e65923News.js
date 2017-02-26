Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');











var width=_reactNative.Dimensions.get('window').width;var

News=function(_Component){babelHelpers.inherits(News,_Component);

function News(props){babelHelpers.classCallCheck(this,News);var _this=babelHelpers.possibleConstructorReturn(this,(News.__proto__||Object.getPrototypeOf(News)).call(this,
props));
_this.state={
dataSource:new _reactNative.ListView.DataSource({
rowHasChanged:function rowHasChanged(row1,row2){return row1!==row2;}})};return _this;


}babelHelpers.createClass(News,[{key:'componentDidMount',value:function componentDidMount()

{
this.fetchData();
}},{key:'fetchData',value:function fetchData()

{var _this2=this;

fetch('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json').
then(function(response){return response.json();}).
then(function(responseData){
_this2.setState({dataSource:_this2.state.dataSource.cloneWithRows(responseData)});
}).
done(function(){});
}},{key:'test',value:function test()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{source:{uri:rowData.img},style:styles.newsImage}),
_react2.default.createElement(_reactNative.Text,{style:styles.newsTitle},rowData.title),
_react2.default.createElement(_reactNative.Text,null,
rowData.summary,'\xA0',
_react2.default.createElement(_reactNative.Text,{style:styles.newsURL,onPress:function onPress(){return _reactNative.Linking.openURL(rowData.url);}},'read more...'))));



}},{key:'render',value:function render()

{var _this3=this;






return(
_react2.default.createElement(_reactNative.ListView,{dataSource:this.state.dataSource,renderRow:function renderRow(val){return _this3.test(val,rowData);}}));

}}]);return News;}(_react.Component);



var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
margin:15},

headerTitle:{
textAlign:'center',
color:'white',
fontWeight:'bold',
fontSize:25,
marginTop:50},

headerImage:{
width:this.width,
height:100},

newsTitle:{
fontWeight:'bold'},

newsImage:{
flex:1,
width:this.width,
height:200},

newsURL:{
color:'blue',
fontStyle:'italic',
textDecorationLine:'underline'}});exports.default=



News;