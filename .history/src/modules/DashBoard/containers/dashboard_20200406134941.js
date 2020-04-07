import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, AppRegistry, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem,   } from 'react-native-elements'
import Element from './element'
import TrackPlayer from 'react-native-track-player';



//En Fichero principal:

AppRegistry.registerComponent('appname', () => Dashboard);
TrackPlayer.registerEventHandler(require('./player_handler.js'));


TrackPlayer.setupPlayer().then(async () => {
  await TrackPlayer.add({
      id: 'trackId',
      url: require('./SFDK.mp3'),
      title: 'Calle candela',
      artist: 'SFDK',
  });
});


//Leer de BD asignar a esta lista y
const listSong = [
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

export default class Dashboard extends Component{
  state={
    
  }

  render(){
      return(
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={styles.container}>
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


          <View style={styles.container}>
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

          <View style={styles.container}>
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


          {/* Reproductor */}
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={{padding: 15, backgroundColor: '#0000FF'}} onPress={() => this.playMusic()}>
              <Text style={{color: '#FFF'}}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 15, backgroundColor: '#FF0000'}} onPress={() => this.pushMusic()}>
              <Text style={{color: '#FFF'}}>Push</Text>
            </TouchableOpacity>
          
          </View>
        </ScrollView>
      );
  } 

  // //Funciones para el reproductor
  // playMusic()
  // {
  //   TrackPlayer.play();
  // }

  // pushMusic(){
  //   TrackPlayer.pause();
  // }

}



  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      paddingTop: 20
    },

    title:{
      color:'black',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

    text:{
      color:'#64EE85',
      paddingHorizontal: 20
    }
  });
  
  