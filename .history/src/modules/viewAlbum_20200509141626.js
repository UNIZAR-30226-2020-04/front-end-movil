import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default class viewAlbum extends Component{
  constructor(props) {
    super(props);
   
  }

  goToSettings(){this.props.navigation.navigate("viewAlbum", {params:})}
  
  render(){
    return(
      <ScrollView style={styles.screen}>
        {/* Seccion de foto etc.. */}
        <View style={styles.header}>
          <ImageBackground style={styles.avatar}
                source={{uri: 'https://picsum.photos/250/300'}}
          >
            <Text style={styles.headerName}>{this.state.user.nick} </Text>
            <Text style={styles.userInfo}>{this.state.user.correo} </Text>
            <Ionicons name="md-settings" size={40} color="white" onPress={this.goToSettings} style={{position:'absolute', right: 10, bottom: 10}}></Ionicons>
          </ImageBackground>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
            Your albums 
          </Text>
          <View style={{height: 200, marginTop: 20}}>
            <ScrollView horizontal={true}>
            
              <Element type='album' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" artist="cualquiera"></Element>
              <Element type='album' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" artist="cualquiera"></Element>
              <Element type='album' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" artist="cualquiera"></Element>
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
              <Element type='album' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" artist="cualquiera"></Element>
              <Element type='album' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" artist="cualquiera"></Element>
              <Element type='album' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" artist="cualquiera"></Element>
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
              <Element type='album' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" artist="cualquiera"></Element>
              <Element type='album' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" artist="cualquiera"></Element>
              <Element type='album' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" artist="cualquiera"></Element>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      
    );
  }
}

  const styles = StyleSheet.create({
    info: {
      flex: 1,
      flexDirection : 'row'
    },

    backgroundImage:{ 
      justifyContent: 'center',
      flex: 1,
      resizeMode: "contain"
    },

    container: {
      flex:1,
    },

    screen: {
      marginTop: 0,
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
});