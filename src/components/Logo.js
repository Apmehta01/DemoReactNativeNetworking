
import React, { Component } from 'react';
import {  
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

export default class Logo extends Component {
 render() {
   return(
     <View  style={styles.container}>
     
     <Image style={{width: 70, height: 70}}
            source={require('../images/Logo.png')}/>

     <Text style={styles.logoText}>Welcome to My app</Text>   
     </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
  },
  logoText:{
      fontSize:18,
      color:'rgba(255,255,255,1)',
      marginVertical:15,
  }
});
