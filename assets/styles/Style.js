import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({

  /* Menu */ 
  menu: {
      flex: 1,
      width:window.width,
      height: window.height,
      backgroundColor: 'beige',
      padding: 20,
      marginTop: 40
   },
   item: {
      fontSize: 14,
      fontWeight: '300',
      paddingTop: 20,
   },

  /* Home */
  button: {
     position: 'absolute',
     top: 50,
     right: 0,
     padding: 10,
  },
  container: {
     flex: 1,
     marginTop: 55,
     //justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
  },

  /* News */
  newsContainer: {
    flex: 1,
    margin: 15,
  },
  newsHeaderTitle: {
    textAlign: 'center',
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 50,
  },
  newsHeaderImage: {
    width: this.width,
    height: 100,
  },
  newsTitle: {
    fontWeight: 'bold',
  },
  newsImage: {
    flex: 1,
    width: this.width,
    height: 200,
  },
  newsURL: {
    color: 'blue',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },

  /* Rugby Clubs */
  titlePage: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    color: '#f0f8ff',
    fontWeight: 'bold'
  },
    headerImg: {
    height: 150,
    width: 360
  },
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
  customnav: {
    position: 'relative',
    top: 0,
    right: 0,
    padding: 10
  },

  /* Fixtures */ 
  container:{
    margin:15,
  },
  imgBanner:{
    width: this.screenWidth,
    height:175,
    resizeMode:'contain',
  },
  pageBanner:{
    width: this.screenWidth,
    resizeMode: 'contain',
  },
  pageTitle:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:75,
    fontSize:25,
  },

  /* Teammate */
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    marginBottom: 10,
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
  headline: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    color: '#f0f8ff',
    fontWeight: 'bold'
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 17,
    marginBottom: 10
  },

  /* Rugby 101 */
  headerImg: {
    height: 100,
    width: 360
  },
  titlePage: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    color: '#f0f8ff',
    fontWeight: 'bold'
  },
  container: {
    marginTop: 10,
    marginLeft: 10
  },

  /* Header */
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

  /* Custom Navbar */
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    marginBottom: 10,
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
  headline: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    color: '#f0f8ff',
    fontWeight: 'bold'
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 17,
    marginBottom: 10
  }

});

module.exports = styles;