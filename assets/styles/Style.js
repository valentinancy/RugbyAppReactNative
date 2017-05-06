import React, { Component } from 'react'
import { StyleSheet, Dimensions,PixelRatio } from 'react-native'
   
const window = Dimensions.get('window');

const styles = StyleSheet.create({

  /* GENERAL */
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    width: window.width,
    height: 100,
  },
  headline: {
    fontSize: 25,
    marginTop: 30,
    color: '#f0f8ff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  loader: {
    marginTop: (window.height/2)-80,
    alignItems: 'center',
  },
  loaderText: {
    fontSize: 20,
    marginTop: 15,
  },
  jsonLoaderContainer: {
    flex: 1,
    margin: 15,
  },

  /* INDEX */
  sceneStyle: {
    paddingTop: 54,
  },
  headerTitle: {
    height:40,
    resizeMode:'contain',
    marginVertical:7,
    marginLeft:14,
  },

  /* MENU */
  menu: {
    flex: 1,
    width:window.width,
    height: window.height,
    backgroundColor: 'red',
    padding: 20,
    paddingBottom:50,
  },
  menuContainer: {
    paddingBottom: 30
  },
  item: {
    fontSize: 15,
    fontWeight: '300',
    paddingTop: 20,
    color:'white',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  menuIcon: {
    width:30,
    height:30,
  },
  connectContainer: {
    flex:1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width:window.width/2+25,
    marginTop:10,
    marginBottom:10
  },
  connectIcon: {
    width:40,
    height:40,
    marginRight:20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  affiliationIcon: {
    width:60,
    height:60,
    marginRight:20,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  affiliationContainer :{
    flex:1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width:window.width/2+25,
    marginTop:10,
    marginBottom:10,
  },
  sponsorContainer: {
    marginTop:-35,
    marginBottom: -15
  },
  // itemContainer: {
  //   flex:1,
  //   flexDirection:'column',

  //   justifyContent:'center',
  //   borderBottomColor:'white',
  //   borderBottomWidth:2,
  //   width:window.width/2,
  // },
  touchOverlay:{
    width:window.width/2+25
  },
  sidebarLogo: {
    width:window.width/2+25,
  },
  menuIconView: {
     flexDirection: 'column',
     paddingRight: 10,
     justifyContent: 'space-around'
  },
  itemContainer: {
    flex:1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderBottomColor:'white',
    borderBottomWidth:2,
    width:window.width/2+25
  },
  sidebarText: {
    color:'white',
    fontSize:11
  },
  /* HOME */
  button: {
    position: 'absolute',
    top: 50,
    right: 0,
    padding: 10,
  },
  homeContainer: {
    flex: 1,
    marginTop: 55,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  /* NEWS */
  newsTitle: {
    fontWeight: 'bold',
  },
  newsImage: {
    width: window.width * .92,
    height: 200,
  },
  newsURL: {
    color: 'blue',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },

  /* FIXTURES */ 
  imgBanner:{
    width: window.width *.92,
    height: 130,
    resizeMode: 'stretch',
  },  
  // pageBanner:{
  //   width: window.width,
  //   resizeMode: 'contain',
  // },
  // pageTitle:{
  //   color:'white',
  //   fontWeight:'bold',
  //   textAlign:'center',
  //   marginVertical:75,
  //   fontSize:25,
  // },

  /* RUGBY CLUBS */
  // titlePage: {
  //   fontSize: 30,
  //   textAlign: 'center',
  //   marginTop: 50,
  //   color: '#f0f8ff',
  //   fontWeight: 'bold'
  // },
  //   headerImg: {
  //   height: 150,
  //   width: 360
  // },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  clubDesc: {
    fontSize: 14
  },
  clubNameDiv: {
    marginBottom: 10
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginLeft: 15
  },
  clubDiv: {
    marginTop: 25
  },
  // customnav: {
  //   position: 'relative',
  //   top: 0,
  //   right: 0,
  //   padding: 10
  // },

  /* TEAMMATE */
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
  teammateHeadline: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    color: '#f0f8ff',
    fontWeight: 'bold'
  },
  headlineImage:{
    paddingTop: 20,
    width: 360,
    height: 120,
    marginBottom: 20
  },
  bStyle:{
    //backgroundColor: '#FF0000',
    //textAlign: 'center',
    marginBottom: 10
  },
  bText:{
    //backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    //fontSize: 15,
    //color : 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 17,
    marginBottom: 10
  },

  /* EDIT PHOTO */
  viewImageSave: {
    width:400,
    height:400
  },
  frameImage: {
    width: 60,
    height: 60
  },
  choosenImage: {
    width: 300,
    height: 300,
    flex: 1
    // flexDirection: 'column'
  },
  choosenImageView: {
    position: 'absolute'
  },
  chosenFramed: {
    width: 300,
    height: 300,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: (window.width-300)/2,
  },
  frameImageView: {
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 6
  },
  frameGroup: {
    marginTop: 20,
    marginBottom: 20
  },
  choosenFrameView: {
    opacity: 1,
    width: 300,
    height: 300,
  },
  empty: {
    opacity: 0
  },
  emptyView: {
    paddingTop: 200
  },
  choosenFrame: {
    height: 300,
    width: 300
  },
  /* RUGBY 101 */
  // headerImg: {
  //   height: 100,
  //   width: 360
  // },
  // titlePage: {
  //   fontSize: 30,
  //   textAlign: 'center',
  //   marginTop: 50,
  //   color: '#f0f8ff',
  //   fontWeight: 'bold'
  // },
  rugby101Container: {
    marginTop: 10,
    marginLeft: 10
  },

  /* HEADER */
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  },

  /* CUSTOM NAVBAR */
  customnav: {
    position: 'relative',
    top: 0,
    right: 0,
    padding: 10
  }

});

module.exports = styles;
