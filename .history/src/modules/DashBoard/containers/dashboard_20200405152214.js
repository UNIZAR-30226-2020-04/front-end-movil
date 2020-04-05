import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card } from 'react-native-elements'

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    
  }
  
    render(){
      return(
        <View style={styles.container} >
            <Card
              image={{ uri: 'https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png'}}>
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
            </Card>
            
        </View>
        
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000000',
      justifyContent: 'center',
    },
  });
  
  