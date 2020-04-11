import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Element from '../../DashBoard/containers/element'

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.screen}>
          <View style={styles.info}>
            <Text style={styles.text}>Hola</Text>
          </View>
          <View style={styles.profileImage}>
            <Text style={styles.text}>Hola</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your songs 
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
              >
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>


          <View style={styles.container}>
            <Text style={styles.title}>
              Your playlists
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
              >
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your podcasts
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
              >
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.text}>Hola</Text>
          </View>
          

        </ScrollView>
      </View>
      
    );
  }
  }


  const styles = StyleSheet.create({
    info: {
      height: 50,
      width: 50,
      flex: 1,
      flexDirection : 'row'

    },

    profileImage: {
      flex: 1,

    },

    container: {
      flex:1,
      backgroundColor: '#000',
      paddingTop: 20
    },

    screen: {
      marginTop: 70,
      backgroundColor: '#000',   
      resizeMode: "cover", 
    },
    
    text: {
      color : 'white'
    },

    container: {
      flex:1,
      backgroundColor: '#000',
      paddingTop: 20
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

  });
  
  