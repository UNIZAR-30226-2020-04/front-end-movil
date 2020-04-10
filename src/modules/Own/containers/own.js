import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();


export default class App extends Component{


  goSubirAlbum = () => {this.props.navigation.navigate('subirAlbum');}
  goSubirPodcast = () =>  {Alert.alert('LLevando a subir podcast')}
  goBorrarAlbum = () =>  {Alert.alert('LLevando a borrar album')}
  goBorrarPodcast = () =>  {Alert.alert('LLevando a borrar podcast')}

    render(){
      return (
        
        <View style={styles.container}>
        

            <TouchableOpacity style={styles.loginBtn} onPress={this.goSubirAlbum}>
              <Text style={styles.loginText}>Subir Album</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={this.goSubirPodcast}>
              <Text style={styles.loginText}>Subir Podcast</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={this. goBorrarAlbum}>
              <Text style={styles.loginText}>Borrar Album</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={this.goBorrarPodcast}>
              <Text style={styles.loginText}>Borrar Podcast</Text>
            </TouchableOpacity>

    
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    backgroundImage:{ 
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      resizeMode: "contain"},

      loginBtn:{
        width:"80%",
        borderRadius:25,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"black"

      },

  });
  
  