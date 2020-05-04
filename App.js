
import React, { Component } from 'react';
import {  
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Signup from './src/pages/Signup';

import Routes from './src/Routes';

export default class App extends Component {
 render() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"/>
      <Routes/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent :'center',
    backgroundColor:'#455a64',
  }
});
