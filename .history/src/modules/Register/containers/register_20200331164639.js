import React, { Component } from 'react';
import { Avatar } from "react-native-elements";
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button2 } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component{
  state={
    email:"",
    password:""
  }

  login = () =>  {Alert.alert('Registrando usuario...')}
  register = () => {this.props.navigation.navigate('Login')}
    render(){
      return (
        
        <View style={styles.container}>
          <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
            <View style={styles.inputView} >

              <TextInput  
                style={styles.inputText}
                placeholder="Pantalla Registro" 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Contraseña..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({password:text})}/>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
              <Text style={styles.loginText}>Sing up! :)</Text>
            </TouchableOpacity>

          </ImageBackground>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    textButton: {
      color: '#f194ff',
      fontSize: 20
    },
  
    logo : {
      marginTop: 0,
      width : 150,
      height : 150,
      resizeMode : 'contain',
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
  
  