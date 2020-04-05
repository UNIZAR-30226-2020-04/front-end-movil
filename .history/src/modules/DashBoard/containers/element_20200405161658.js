import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem,   } from 'react-native-elements'


export default class Element extends Component{
  state={
    
  }
  
    render(){
      return(
        <View style={{ height:160, width:130, marginLeft: 20, borderWidth: 0.5, 
            borderBottomColor: '#000000' }}>
            <View style={{ flex:2 }}>
            <Image source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} 
                style={{flex:1, width:130, height: null,
                    resizeMode: 'cover'}}
            />
            </View>

            <View style={{ flex:1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
            <Text>Album1</Text>
            <Text>Song1</Text>
            </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    
  });
  
  