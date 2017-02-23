import React,{Component} from 'react';
import {AppRegistry,Image,View,StyleSheet,Dimensions} from 'react-native';

var screenWidth=Dimensions.get('window').width;

class Fixtures extends Component{
  render(){
    let banner1={
      uri:'http://rugbyindonesia.or.id/wp-content/uploads/2016/03/1-Jakarta-XV-Banner-1024x343.jpg'
    }
    let banner2={
      uri:'http://rugbyindonesia.or.id/wp-content/uploads/2016/03/2-Jakarta-10s-Banner-1024x343.jpg'
    }
    let banner3={
      uri:'http://rugbyindonesia.or.id/wp-content/uploads/2016/03/3-Nusnatara-7s-1024x343.jpg'
    }    
    return(
      <View style={styles.container} >
        <Image source={banner1} style={styles.imgBanner}/>
        <Image source={banner2} style={styles.imgBanner}/>
        <Image source={banner3} style={styles.imgBanner}/>        
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    margin:15,
  },
  imgBanner:{
    flex:1,
    width: screenWidth-30,
    height: null,
    resizeMode:'contain',
    marginVertical:30,
  }
});

export default Fixtures