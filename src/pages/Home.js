import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  AppRegistry
} from 'react-native';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],      
    }
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <Image style={{width: 150, height: 100,margin: 5}}
               source={{uri:'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'}}/>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{ fontSize:18, color:'white',marginBottom:15 }}>
          {item.title}</Text>
          <Text style={{ fontSize:16, color:'white',marginBottom:15 }}>
          {item.price}</Text>
        </View>
      </View>
    )
  }

  componentDidMount() {
    const url ='http://www.mocky.io/v2/5e8c1b942f0000810088c71f'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.Product
        })
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.dataSource} 
        renderItem={this.renderItem} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
     marginTop: 14,
    alignSelf: "stretch",
  },
   row: {
      elevation: 1,
      borderRadius: 2,
      flex: 1,
      flexDirection: 'column',  // main axis
      justifyContent: 'flex-start', // main axis
      alignItems: 'center', // cross axis
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 18,
      paddingRight: 16,
      marginLeft: 14,
      marginRight: 14,
      marginTop: 0,
      marginBottom: 6,
    },
});
