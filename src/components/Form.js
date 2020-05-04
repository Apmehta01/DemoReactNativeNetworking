
import React, { Component } from 'react';
import {  
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class Form extends Component {
   constructor(props) {
    super(props);  
     this.state = {
      emailAddress: '',
      passWord: ''
     };
   }
  renderScreen(){    
   if(this.props.type == 'Login')
      {
        return (
        <TouchableOpacity 
        style={styles.button}
        onPress={this.onPressLogin}
        >
        <Text style={styles.buttonText}>{this.props.type}</Text>

      </TouchableOpacity>
        )}
      else if (this.props.type == 'Sign up')
      {
        return( 
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{this.props.type}</Text>
      </TouchableOpacity>
      )}
    }

  onPressLogin =()=>{

    if(this.state.emailAddress!="" && this.state.passWord != ""){
    this.onFetchLoginRecords();
    }
    else{
      Alert.alert("Please enter valid details");
    }
 }

  async onFetchLoginRecords (){
  var data = {
     email: this.state.emailAddress,
     password: this.state.passWord,
    };
    try {
     let response = await fetch(
      "https://reqres.in/api/register",
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status = 200 ) {
        alert("Login Successfully!!!");
     }
   } catch (errors) {

     alert(errors);
    } 
 }
 render() {
   return(
     <View  style={styles.container}>
      
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Email"
      placeholderTextColor="rgba(255,255,255,1)"
      selectionColor="#fff"
      keyboardType="email-address"
      onSubmitEditing={()=>this.password.focus()}
      onChangeText={text => this.setState({ emailAddress: text })}
      />

      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder="Password"
      placeholderTextColor="rgba(255,255,255,1)"
      secureTextEntry={true}
      ref={(input)=>this.password=input}
      onChangeText={text => this.setState({ passWord: text })}
      />

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{this.props.type}</Text>
      </TouchableOpacity> */}

      {this.renderScreen()}
      
     </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
  },
  inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10
  },
  button:{
    backgroundColor:'#D34178',
    borderRadius:25,
    marginVertical:10,
    width:300,
    paddingVertical:12
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'rgba(255,255,255,1)',
    textAlign:'center'
  }
});
