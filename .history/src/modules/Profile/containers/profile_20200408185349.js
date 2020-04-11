import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Element from '../../DashBoard/containers/element'

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Profile extends Component{
  state={
    user:{
      email: "edu@edu.edu",
      username: "ediaz",
      info: "info"
    }
  }
  goToSettings = () => {this.props.navigation.navigate("Settings")}

  
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.screen}>
          <View style={styles.header}>
            <ImageBackground style={styles.avatar}
                  source={{uri: 'https://picsum.photos/200/300'}}
            >
              <Text style={styles.headerName}>Eduardico </Text>
              <Text style={styles.userInfo}>eduardico@mail.com </Text>
            </ImageBackground>
            
          </View>
          

          {/* Contenedor de info y imagen */}
          <View style={{flexDirection : 'row', height: 200, marginTop: 50, marginLeft: 10, marginRight: 10}}>
            <View style={styles.info}>
              <View style={{marginLeft: 5}}>
                <Text style={[styles.text, {fontSize: 24,fontWeight: '600', marginTop: 10}]}>{this.state.user.username}</Text>
                <Button title="Settings" onPress={this.goToSettings}/>
              </View>
            </View>
            <View style={styles.profileImage}>
              <Image source={require('../../../Wallpapers/profileImage.jpg')} style={{flex:1,width:null, height: null, resizeMode: 'cover'}} />
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
      flexDirection : 'row'
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
      marginTop: 0,
      backgroundColor: '#000',   
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
    avatar: {
      flex: 1,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    headerName:{
      marginTop: 170, 
      marginLeft: 10,
      fontSize:24,
      color:"white",
      fontWeight:'600',
    },
    userInfo:{
      marginLeft: 10,
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    }
  });