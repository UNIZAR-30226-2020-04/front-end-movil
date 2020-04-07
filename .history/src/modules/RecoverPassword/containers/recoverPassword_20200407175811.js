import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';


export default class RecoverPassword extends Component{

    render(){
        return(
            <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
                    <Text style={styles.body}>
                        Enter the email address you used to register.{"\n"}{"\n"}
                        You will receive an email with your username and a link to reset your password
                    </Text>

                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Email..." 
                            placeholderTextColor="#FFFFFF"
                            onChangeText={text => this.setState({email:text})}
                        />
                    </View>

                

                
            </ImageBackground>
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
      alignItems : 'center'
      
    },

    inputView:{
        justifyContent:"center",
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height: 50,
        marginBottom:20,
        padding:20
    },

    inputText:{
        height:50,
        color:"white"
    },
  
    backgroundImage:{ 
      alignItems: 'center',
      justifyContent : 'center',
      flex: 1,
      resizeMode: "contain"},
  });