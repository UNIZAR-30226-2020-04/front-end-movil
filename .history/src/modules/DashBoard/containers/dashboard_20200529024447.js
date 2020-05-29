import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground, ScrollView, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem,   } from 'react-native-elements'
import Element from './element'
import User from './user'
import NetworkService from '../../../networks/NetworkService'



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

export default class Dashboard extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     user: this.props.navigation.state.params.user,//new User(),//this.props.navigation.state.params.user,//,//async () => await this.retrieveData(),
  //     otrosStates : "valor que sea",
  //     loaded: false,
  //   }
    
  //   //this.retrieveData = this.retrieveData.bind(this);
  // }
  constructor(props){
    super(props)
    
  }
  state={
    user: new User(),//this.props.navigation.state.params.user,//,//async () => await this.retrieveData(),
    otrosStates : "valor que sea",
    loaded: false,
  }
  

  retrieveUser = async () => {
    try {
      const retrieveItem = await AsyncStorage.getItem('UserState');
      if (retrieveItem !== null) {
        // We have data!!
        const item = JSON.parse(retrieveItem)
        console.log("Item: ", item);
        return item;
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error al obtener datos")
    }
  };

  getAlbumsDB = async () => {
    try {
      await NetworkService.fetchAlbums(this.state).then(res => {console.log("ALBUMES: ",res)});
    } catch (error) {
      console.log("Error al obtener Albumes")
    }
  };
  
  
  //Ojo temporizador de refresco
  componentDidMount(){
    
    setInterval(() => {
      this.setState(() => {
          console.log('setting state');
          //recuperar datos del usuario
          console.log("Antes retrieve data")
          let user_state;
          //Traes datos de usuario del AsyncStorage
          this.retrieveUser().then( res => {this.setState({user: res, loaded:true});  return { user: user_state } }).catch(err => console.log("Error",err));
          //Traes data del usuario
          //¿Hacerlo todo junto?
          

      });
    }, 10000);
    console.log("state completo:",this.state)
  }

  goToMusicPlayer = () => {this.props.navigation.navigate('MusicPlayer');}

  renderLoaded(){
    //this.retrieveUser()
    return(
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.backgroundImage}>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={[styles.container]}>
            <Text style={[styles.title, {marginTop: 70}]}>
              Wellcome again {this.state.user.nick} !
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }

  render(){
    //OPcion 1
    console.log("this.state.loaded = ",this.state.loaded)
    if (this.state.loaded){
      console.log("this.state.loaded = ",this.state.loaded)
      console.log("user = ",this.state.user)
      return this.renderLoaded()
    }else{
      console.log("ELSEthis.state.loaded = ",this.state.loaded)
      console.log("user = ",this.state.user)
      return(<View><Text>Loading...</Text></View>)
    }
    
  } 

}



  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'transparent',
      paddingTop: 20
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

    text:{
      color:'white',
      paddingHorizontal: 20
    },

    backgroundImage:{ 
      justifyContent: 'center',
      flex: 1,
      resizeMode: "contain"},
  });
  
  