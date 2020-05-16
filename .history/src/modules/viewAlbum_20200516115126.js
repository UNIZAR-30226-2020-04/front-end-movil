import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign } from '@expo/vector-icons';
import NetworkService from '../networks/NetworkService'

export default class viewAlbum extends Component{
  constructor(props) {
    super(props);
    state={
      album_info: ""

    }
  }

  componentDidMount(){

    //HAcer consulta de songs
    NetworkService.listSongsAlbum(this.props.route.params.artist, this.props.route.params.paramId)
    //Me devuelve una lista de canciones
  }

  //Devuelve el id de album a mostrar que se ha guardado en................................
  retrieveAlbum = async (albumID) => {
    try {
      const retrieveItem = await AsyncStorage.getItem(albumID);
      if (retrieveItem !== null) {
        // We have data!!
        console.log("DashBoardValue: ", retrieveItem);
        const item = JSON.parse(retrieveItem)
        console.log("Item: ", item);
        return item;
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error al obtener datos")
    }
  };

  render(){
    console.log("Params",this.props.route.params)
    return(
      <ImageBackground source={require('../Wallpapers/fondo.jpg')} style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
              {this.props.route.params.album_name}
            </Text>
            <Text style={styles.title}>
              {this.props.route.params.artist}
            </Text>
          </View>
      </ImageBackground>
      
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
      paddingTop:50,
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