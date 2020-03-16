

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
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  

} from 'react-native';




export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state=
    {
        isloading:true,
        chits:[],
        


    }

    
}

async componentDidMount(){

  let val = await AsyncStorage.getItem('token');
   let data = JSON.parse(val);

     
     return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
     .then((response) => response.json())
     .then((responseJson) =>{

         this.setState({
             isloading:false,
             chits:responseJson,
            
            
         })
     })

     .catch((error) =>{
         alert(error);

     });
 }




  render(){

    if(this.state.isloading){
      return(
      <View style = {styles.container}>
        <ActivityIndicator size="large"/>
      </View>
      )
    }

    else{

      let chits = this.state.chits.map((val,key) =>{
        return <View key ={key} style = {styles.item}>
          <Text style = {styles.text}>Given name: {val.user.given_name}</Text>
          <Text style = {styles.text}>Chitt: {val.chit_content}</Text>
          <Text style = {styles.text}> User ID: {val.user.user_id}</Text>
          
          
        </View>
  
      });

      



    return(

      <View style = {styles.container}>
        
        <Text style = {styles.headingtext}>Login or Sign up to submit your own chitt</Text>
        



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

        <ScrollView>
         {chits}
         
        </ScrollView>


      </View>
    )

    }
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
          fontSize:20,
          fontWeight:'bold',
      },
      item:{

        flex:1,
        alignSelf:'stretch',
        margin:30,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:3,
        borderBottomColor:'#007aff',
        fontSize:20,
      },
      headingtext:{
        fontSize:21,
        fontWeight:'bold',
    },
      
  });