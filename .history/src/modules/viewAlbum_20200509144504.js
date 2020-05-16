import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default class viewAlbum extends Component{
  constructor(props) {
    super(props);
   
  }
  
  render(){
    console.log("Params",this.props.route.params)
    return(
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Your albums 
          </Text>
        </View>
      </ScrollView>
      
    );
  }
}

  const styles = StyleSheet.create({
    info: {
      flex: 1,
      flexDirection : 'row'
    },

    backgroundImage:{ 
      justifyContent: 'center',
      flex: 1,
      resizeMode: "contain"
    },

    container: {
      flex:1,
    },

    screen: {
      marginTop: 0,
      resizeMode: "cover", 
    },
    
    text: {
      color : 'white'
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

    header:{
      height: 250,
    },
    headerContent:{
      height: 150,
      width: 150,
      padding:30,
      alignItems: 'center',
    },
});