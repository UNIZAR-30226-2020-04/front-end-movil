import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();


export default class App extends Component{


  login = () =>  {Alert.alert('Registrando usuario...')}
  goLogin = () => {this.props.navigation.navigate('Login')}
    render(){
      return (
        
        <View style={styles.container}>

            <TouchableOpacity style={styles.loginBtn} onPress={this.goLogin}>
              <Text style={styles.loginText}>subeeeeeeeeeeeeeeeeee</Text>
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
  
  