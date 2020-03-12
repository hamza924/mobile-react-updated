

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
  TextInput,
  ActivityIndicator,
} from 'react-native';




export default class App extends React.Component{
    constructor(props){
        super(props);
    
        this.state=
        {
            search_name:'',
            user_id:'',
            result_name:'',
            result_email:'',
            result_family_name:'',
            isloading:true,

            result:null,
            isloading2:false,
            user_follower_result:null,
            user_following_result:null,

    
    
        }
    
        
    }

    _handlepress = async () =>{

        let name = this.state.search_name;

        
        fetch('http://10.0.2.2:3333/api/v0.0.5/search_user?q='+name)
        .then((response) => response.json())
        .then((responseJson) =>{

            
         
            //alert(responseJson);

         /*   this.setState({
                user_id:responseJson.user_id,
                result_name:responseJson.given_name,
                result_email:responseJson.email,
                result_family_name:responseJson.family_name,
            })
            */
            //alert(val.user_id);

            this.setState({
                isloading:false,
                result:responseJson,
            })
        })

        .catch((error) =>{
            alert(error);

        });
    }

    _handlepress1 = async (value)=>{

      //alert(val);

      let v = await AsyncStorage.getItem('token');
      let data = JSON.parse(v);

      fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+value+'/follow',{

        method: 'POST',

        headers: {
           'X-Authorization': data.token,
       
          },

      })
        .then((response) => {

          var ok = response.ok;

          if(ok){
            alert('YAY OK');
            return response.text();
          }

          else{
            alert('Seems like you are already following them');
          }


        })
        .then((responseJson) =>{

            
         
            //alert(responseJson);

         /*   this.setState({
                user_id:responseJson.user_id,
                result_name:responseJson.given_name,
                result_email:responseJson.email,
                result_family_name:responseJson.family_name,
            })
            */
            //alert(val.user_id);

            
        })

        .catch((error) =>{
            alert(error);

        });



    }

    _handlepress2 = async (value)=>{

      //alert(val);

      let v = await AsyncStorage.getItem('token');
      let data = JSON.parse(v);

      fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+value+'/follow',{

        method: 'DELETE',

        headers: {
           'X-Authorization': data.token,
       
          },

      })
        .then((response) => {

          var ok = response.ok;

          if(ok){
            alert('YAY OK');
            return response.text();
          }

          else{
            alert('Seems like you are already following them');
          }


        })
        .then((responseJson) =>{

            
         
            //alert(responseJson);

         /*   this.setState({
                user_id:responseJson.user_id,
                result_name:responseJson.given_name,
                result_email:responseJson.email,
                result_family_name:responseJson.family_name,
            })
            */
            //alert(val.user_id);

            
        })

        .catch((error) =>{
            alert(error);

        });



    }

    _handlepress3 = async (value)=>{

      //alert(val);

      let v = await AsyncStorage.getItem('token');
      let data = JSON.parse(v);

      fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+value+'/followers',{

        method: 'GET',

        headers: {
           'X-Authorization': data.token,
       
          },

      })
        .then((response) => {

          var ok = response.ok;

          if(ok){
            //alert('YAY OK');
            return response.json();
          }

          else{
            alert('Seems like you are already following them');
          }


        })
        .then((responseJson) =>{

         // const data = JSON.parse(responseJson);

          //alert(responseJson);
            
         
            //alert(responseJson);

         /*   this.setState({
                user_id:responseJson.user_id,
                result_name:responseJson.given_name,
                result_email:responseJson.email,
                result_family_name:responseJson.family_name,
            })
            */
            //alert(val.user_id);

            this.setState({


              isloading:false,
              user_follower_result:responseJson.user_id,

            })

            
        })

        .catch((error) =>{
            alert(error);

        });



    }

    _handlepress4 = async (value)=>{

      //alert(val);

      let v = await AsyncStorage.getItem('token');
      let data = JSON.parse(v);

      fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+value+'/following',{

        method: 'GET',

        headers: {
           'X-Authorization': data.token,
       
          },

      })
        .then((response) => {

          var ok = response.ok;

          if(ok){
            alert('YAY OK');
            return response.text();
          }

          else{
            alert('Seems like you are already following them');
          }


        })
        .then((responseJson) =>{

          //alert(responseJson);
            
         
            //alert(responseJson);

         /*   this.setState({
                user_id:responseJson.user_id,
                result_name:responseJson.given_name,
                result_email:responseJson.email,
                result_family_name:responseJson.family_name,
            })
            */
            //alert(val.user_id);

            
        })

        .catch((error) =>{
            alert(error);

        });



    }
    
    


  render(){

    let name = this.state.search_name;

    if(this.state.isloading){
        return(
            <View style = {styles.container}>
        <Text style = {styles.text}>Search for a user</Text>

        <TextInput

        placeholder="e.g:John doe"

        onChangeText = {(val) => this.setState({search_name:val})}

        style={styles.input}/>

        

   

    <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {this._handlepress.bind(this)}  >
          <Text style={styles.customBtnText}>Sign Up</Text>
        </TouchableOpacity> 

        </View>
        )
    }else if(!this.state.isloading){

    var chits = this.state.result.map((val,key) =>{
        
        return <View key ={key} style = {styles.item}>
          <Text style = {styles.text}>Given Name:{val.given_name}</Text>
          <Text style = {styles.text}>User Id:{val.user_id}</Text>

          <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {this._handlepress1.bind(this,val.user_id)}  >
          <Text style={styles.customBtnText}>Follow</Text>
        </TouchableOpacity> 

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {this._handlepress2.bind(this,val.user_id)}  >
          <Text style={styles.customBtnText}>UnFollow</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {this._handlepress3.bind(this,val.user_id)}  >
          <Text style={styles.customBtnText}>View Followers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {this._handlepress4.bind(this,val.user_id)}  >
          <Text style={styles.customBtnText}>View Following</Text>
        </TouchableOpacity>


            
          
        </View>

        

        
  
      });

     /* var followers = this.state.user_follower_result.map((val,key) =>{

        return<View key = {key} style = {styles.item}>
          
          <Text style = {styles.text}>User Id:{val.user_id}</Text>

        </View>

          

      });
*/
    
    return(
      <ScrollView>
      <View style = {styles.container}>
        
        
        {chits}

     
        


  


       

       


      </View>
      </ScrollView>
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
          fontSize:30,
          fontWeight:'bold',
      },
      input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        alignSelf: 'stretch',
        borderColor: '#48bbec'
      },
      item:{

        flex:1,
        alignSelf:'stretch',
        margin:30,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#007aff',
        fontSize:20,
      },
      
  });