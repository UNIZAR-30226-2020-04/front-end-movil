import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import Element from '../../DashBoard/containers/element'

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    user:{
      email: "edu@edu.edu",
      username: "ediaz",
      info: "info"
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.screen}>
            <View style={{alignItems: 'center'}}>
                <Text style={[styles.text, {fontSize: 24,fontWeight: '600', marginTop: 10}]}>Select an element to delete</Text>
            </View>

          {/* Contenedor de info y imagen */}
          <View style={{height: 200, marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <View style={styles.info}>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginLeft: 5}]}>Username</Text>
              <View style={styles.inputView} >
              <TextInput  
                secureTextEntr
                style={styles.inputText}
                placeholder="Contraseña..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({password:text})}/>
            </View>
              <TextInput style={styles.inputView}>
                <Text style={[styles.text, {fontSize: 20,fontWeight: '600',}]}>{this.state.user.username}</Text>
              </TextInput>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginTop: 10}]}>Info</Text>
              <Text style={[styles.text, {fontSize: 24,fontWeight: '600',}]}>{this.state.user.info}</Text>
            </View>
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
        </ScrollView>
      </View>
      
    );
  }
  }


  const styles = StyleSheet.create({
    info: {
      flex: 1,
    },

    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    profileImage: {
      flex: 1,

    },

    container: {
      flex:1,
      backgroundColor: '#000',
      paddingTop: 20,
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
  
  
  