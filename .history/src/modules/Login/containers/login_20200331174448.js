import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class App extends Component{
  state={
    email:"",
    password:""
  }

  login = () =>  {Alert.alert('Iniciando Sesion')}
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
        <TouchableOpacity onPress={this.login}>
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>


          </ImageBackground>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    logo : {
      width: '90%',
      resizeMode : 'stretch',
      borderRadius : 30
    },
  
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
  
    backgroundImage:{ 
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      resizeMode: "contain"},

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
        backgroundColor:"#fb5b5a",
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
  
  