import React, { Component } from 'react';
import { Avatar } from "react-native-elements";
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, ScrollView, Image, ImageBackground } from 'react-native';
import { Button2 } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//const image = { require(./Wallpapers/) };

export default class App extends Component{
  login = () => { 
      this.props.navigation.navigate('Login')
  }

  register = () => { 
    this.props.navigation.navigate('Register')
  }

  render(){
    return (
      
      <View style={styles.container}>
          <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
            <Image style={[styles.logo, {marginBottom: 15}]} source={require('../../../Wallpapers/logo.jpg')}
              ></Image>
            
            <View>
              <Text style={[styles.body, {marginTop: 15}]}>Listen your favourite songs.</Text>
              <Text style={[styles.body, {marginTop: 15}]}>No credit cards</Text>
              <Text style={[styles.body, {marginTop: 15}]}>In all your devices</Text>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={this.register}>
              <Text style={{color: 'white'}}>Free register</Text>
            </TouchableOpacity>
            <Text style={[styles.body, {marginTop: 15, marginBottom:15}]}>Already have an account?</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
              <Text style={{color: 'white'}}>Sing in! :)</Text>
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
    width : '80%',
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

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  }
});

