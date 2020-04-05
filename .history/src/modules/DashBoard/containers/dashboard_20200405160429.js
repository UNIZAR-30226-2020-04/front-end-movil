import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem,   } from 'react-native-elements'



const list = [
  {
    song_name: 'Album1',
    image_album_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    album_name: 'Song1'
  },
  {
    song_name: 'Album2',
    image_album_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    album_name: 'Song2'
  },
]



const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    
  }
  
    render(){
      return(
        <ScrollView
          scrollEventThrottle={16}
        >
          <View>
            <Text style={styles.title}>
              Songs recently listened
            </Text>

          </View>
        </ScrollView>
        
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000000',
      justifyContent: 'center',
    },

    title:{
      fontSize:24,
      fontWeight: '600',
      paddingHorizontal: 20
    }
  });
  
  