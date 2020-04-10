import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
//import IndexLogin from '../../../indexLogin';
import NetworkService from '../../../networks/NetworkService'

export default class App extends Component{
  state={
    email:"",
    password:""
  }

  // main = () =>  {this.props.navigation.navigate('Main')}
  goToRecoverPassword = () => {this.props.navigation.navigate('RecoverPassword');}
  login = () => { NetworkService.loginUser(this.state);}
  goToMain = () => { this.props.navigation.navigate('MainLogged', { screen: 'DashBoard' });}
  register = () => {this.props.navigation.navigate('Register')}
    render(){
      return (
        
        <View style={styles.container}>
          <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntr
                style={styles.inputText}
                placeholder="Contraseña..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({password:text})}/>
            </View>
          
            <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
              <Text style={styles.loginText}>Iniciar Sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.register}>
              <Text style={styles.loginText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.goToRecoverPassword} style={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute', //Here is the trick
              bottom: 0, //Here is the trick
            }}>
              <Text style={styles.loginText}>Forgot password? Get it back here</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  
    body : {
      alignItems : 'center',
      justifyContent : 'center',
      fontSize: 17,
      color: '#ffffff'
    },
  
    container: {
      flex:1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },
  
    backgroundImage:{ 
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height: 50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    inputText:{
      height:50,
      color:"white"
    },

    loginBtn:{
      width:"80%",
      backgroundColor:"#64EE85",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },

    loginText:{
      color:"white"
    }

  });
  
  