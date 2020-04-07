import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';


export default class RecoverPassword extends Component{

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <Text style={styles.body}>
                            Enter the email address you used to register.{"\n"}{"\n"}
                            You will receive an email with your username and a link to reset your password
                        </Text>
                    </View>
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
      justifyContent : 'center',
    },
  
    backgroundImage:{ 
      alignItems: 'center',
      flex: 1,
      resizeMode: "contain"},
  });