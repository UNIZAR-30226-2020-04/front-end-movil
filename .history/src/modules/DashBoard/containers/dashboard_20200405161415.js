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
          <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
            <Text style={styles.title}>
              Songs recently listened
            </Text>

            <View style={{height: 160, marginTop: 20}}>
              <ScrollView>
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

              </ScrollView>


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
  
  