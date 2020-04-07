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
          <Text>Hola</Text>
        </View>
        
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000',
      paddingTop: 20
    },
    
    text: {
      color : 'white'
    }

  });
  
  