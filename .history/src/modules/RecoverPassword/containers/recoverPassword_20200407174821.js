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

                        <View style={styles.inputView} >
                            <TextInput  
                                secureTextEntr
                                style={styles.inputText}
                                placeholder="Contraseña..." 
                                placeholderTextColor="#FFFFFF"
                                onChangeText={text => this.setState({password:text})}
                            />
                        </View>
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
      color: '#ffffff',
      marginLeft: 10,
      marginRight:10
    },
  
    container: {
      flex:1,
      justifyContent : 'center',
      
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
  
    backgroundImage:{ 
      alignItems: 'center',
      flex: 1,
      resizeMode: "contain"},
  });