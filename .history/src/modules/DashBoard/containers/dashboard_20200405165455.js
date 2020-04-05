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
          <View styles={{backgroundColor: 'black'}}>
            <View style={{flex:1, paddingTop: 20}}>
              <Text style={styles.title}>
                Songs recently listened
              </Text>
              <View style={{height: 200, marginTop: 20}}>
                <ScrollView
                  horizontal={true}>
                  <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                  <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                  <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                </ScrollView>
              </View>
            </View>


            <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={styles.title}>
                Playlist recently listened
              </Text>
              <View style={{height: 200, marginTop: 20}}>
                <ScrollView
                  horizontal={true}>
                  <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                  <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                  <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                </ScrollView>
              </View>
            </View>

            <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={styles.title}>
                Podcast recently listened
              </Text>
              <View style={{height: 200, marginTop: 20}}>
                <ScrollView
                  horizontal={true}>
                  <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                  <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                  <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                </ScrollView>
              </View>
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
  
  