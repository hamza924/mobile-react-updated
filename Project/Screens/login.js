import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';




export default class App extends React.Component{

    constructor(props){
        super(props);
  
        this.state=
        {
             
           
           
            email:'',
            password:'',
            token:''
  
  
        }
  
        
   }


 /* componentDidMount(){
     this._loadState().done();
   }

   _loadState = async () =>{

    var value = await AsyncStorage.getItem('token');
    if(value !== null){

      this.props.navigation.navigate('loggedin');
      
    }
   }

   */
   
   handlepress = async () =>{

    fetch('http://10.0.2.2:3333/api/v0.0.5/login', {
      method: 'POST',
      headers: {
     'Accept': 'text/plain , application/json',
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({
    email: this.state.email,
    password:this.state.password,
    }),
})
.then((response) => {

//  const contentType = response.headers.get('Content-Type');
  //alert(response);
  
//  if (contentType && contentType.indexOf('application/json')==1){

   // alert('i WORK BITCH');
 //   return response.json();
    

 // }
  
 
        var ok = response.ok;
        if(ok){
            // alert('200');
            this.props.navigation.navigate('loggedin');
        return response.text();
        }
        else{

    //alert('ERORR2');
    }
  
 })

  
  .then((res) => {




  // if(res.status === 200){
    alert(res);
  const d1 = JSON.stringify(res);

   const data  = JSON.parse(res);
   AsyncStorage.setItem('token',res);
   

   

    //alert(data.token +' '+ d1 );
   // }
   // else{
   //   alert(res);
   // }

   //alert(res);



   
  })
.catch((error) => {
alert('Invalid email/Password');
});

}

  render(){
    return(

      <View style = {styles.container}>
        <Text style = {styles.text}>Login</Text>

        <Text style={styles.text} >Email</Text>

        <TextInput

        placeholder="Email"

        onChangeText = {(val) => this.setState({email:val})}

        style={styles.input}/>

        <Text style={styles.text} >Password</Text>

        <TextInput

        placeholder="PASSWORD"

        onChangeText = {(val) => this.setState({password:val})}

        style={styles.input}

        secureTextEntry={true}/>



        <TouchableOpacity
          style={styles.customBtnBG}
          onPress = {this.handlepress.bind(this)}  >
          <Text style={styles.customBtnText}>Sign Up</Text>
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
          fontSize:24,
          fontWeight:'bold',
          textAlign:'left',
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
      
  });