import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//import IndexLogin from '../../../indexLogin';

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    
  }
  
    render(){
      return(
        <Text>Hola</Text>
      );
    }
  }


  const styles = StyleSheet.create({
  

  });
  
  