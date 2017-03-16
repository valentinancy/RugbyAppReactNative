import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({

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
  }

});

module.exports = styles;