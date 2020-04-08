import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.text}>Hola</Text>
        </View>
        
      </View>
      
    );
  }
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      paddingTop: 20
    },

    screen: {
      marginTop: 20,
      backgroundColor: '#fff',
      marginBottom : 20,
      bottom : 10,   
      resizeMode: "cover", 
    },
    
    text: {
      color : 'white'
    }

  });
  
  