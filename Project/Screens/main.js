/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';




export default class App extends React.Component{




  render(){
    return(

      <View style = {styles.container}>
        <Text style = {styles.text}>Welcome to the Chittr Mobile Assignment!</Text>

        



        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => this.props.navigation.navigate('login')}  >
          <Text style={styles.customBtnText}> Login</Text>
        </TouchableOpacity> 

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => this.props.navigation.navigate('signup')}  >
          <Text style={styles.customBtnText}>SignUp </Text>
        </TouchableOpacity> 


      </View>
    )

    
  }


}

const styles = StyleSheet.create({
    container: {
      flex:1,
    justifyContent: "center",
      alignItems: "center"
    },
  
    /* Here, style the text of your button */
      customBtnText: {
          fontSize: 24,
          fontWeight: '400',
          color: "#fff",
      },
  
    /* Here, style the background of your button */
      customBtnBG: {
      backgroundColor: "#007aff",
      marginTop:30,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 50
      },

      text:{
          fontSize:30,
          fontWeight:'bold',
      }
      
  });