import React, { Component } from 'react';
import { Avatar } from "react-native-elements";
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground } from 'react-native';
import { Button2 } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//const image = { require(./Wallpapers/) };

export default class Principal extends Component{
  register = () => {Alert.alert('yendo a registro')}
  render(){
    return (
      
      <View style={styles.container}>
          <ImageBackground source={require('./Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.image}>
            
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
    marginTop: 50,
    width : 150,
    height : 150,
    resizeMode : 'contain',
    borderRadius : 30
  },

  body : {
    alignItems : 'center',
    justifyContent : 'center',
    fontSize: 17
  },

  container: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

