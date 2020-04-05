import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem,   } from 'react-native-elements'
import Element from './element'


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
          <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
            <Text style={styles.title}>
              Songs recently listened
            </Text>

            <View style={{height: 160, marginTop: 20}}>
              <ScrollView>
                <Element imageUri={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}}/>


            </View>

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
  
  