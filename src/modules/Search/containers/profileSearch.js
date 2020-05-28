import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Ionicons, AntDesign } from '@expo/vector-icons';
import Element from '../../DashBoard/containers/element'
import User from '../../DashBoard/containers/user'
import NetworkService from '../../../networks/NetworkService'

const DEFAULT_URI = "http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg"

export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state.user=this.props.route.params;
  }

  state={
    user: new User(),//async () => await this.retrieveData(),
    albums: "",
    playlists: "",
    podcasts: "",
    otrosStates : "valor que sea",
    loadedUser: false,
    loadedAlbums: false,
    loadedPlaylists: false,
    loadedPodcasts: false,
  }

  


  getAlbumsDB = async () => {
    try {
     
      await NetworkService.fetchAlbums(this.state.user).then(res => {this.setState({albums: res, loadedAlbums:true});console.log("GETALBUMS RES:", res);console.log("GETALBUMS ALBUMS:", this.state.albums)});
    } catch (error) {
      console.log("Error al obtener Albumes")
    }
  };

  getPlaylistsDB = async () => {
    try {
    
      await NetworkService.fetchPlaylists(this.state.user).then(res => {this.setState({playlists: res, loadedPlaylists:true});console.log("GETPLAYLIST RES:", res);console.log("GETPLAYLIST PLAYLIST:", this.state.playlists)});
    } catch (error) {
      console.log("Error al obtener Playlists")
    }
  };

  getPodcastsDB = async () => {
    try {
      
      await NetworkService.fetchPodcasts(this.state.user).then(res => {this.setState({podcasts: res, loadedPodcasts:true});console.log("GETPodcasts RES:", res);console.log("GETPodcasts Podcasts:", this.state.podcasts)});
    } catch (error) {
      console.log("Error al obtener Podcasts")
    }
  };

  componentDidMount(){
    
      
    this.setState({user:this.props.route.params, loadedUser:true}) 
      
    this.getAlbumsDB().then( res => {
      //console.log("HA IDO", res)
      this.getPlaylistsDB().then( res => {
        //console.log("HA IDO", res)
        this.getPodcastsDB().then( res => {
          console.log("HA IDO", res)
        }).catch(err => console.log("Error",err));
      }).catch(err => console.log("Error",err));
    })

  }

  goToSettings = () => {this.props.navigation.navigate("Settings", {props: this.state})}
  renderLoaded(){
    return(
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.container}>
        <ScrollView style={styles.screen}>
          {/* Seccion de foto etc.. */}
          <View style={styles.header}>
            <ImageBackground style={styles.avatar}
                  source={{uri: 'https://picsum.photos/250/300'}}
            >
              <Text style={styles.headerName}>{this.state.user.nick} </Text>
              <Text style={styles.userInfo}>{this.state.user.correo} </Text>
            </ImageBackground>
          </View>

          {/* Recorrer el array de albums y mostrarlos cada album */}

          <View style={styles.container}>
            <Text style={styles.title}>
              Albums 
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView horizontal={true}>
                {/* //Mostrar cada album */}
                {/* Recorrer array de albumes y crear Element */}
                {console.log("this.state.albums: ", this.state.albums)}
                {this.state.albums.map(
                  element => 
                    <Element type='album' paramId={element.idAlbum.l_id} image = {{ uri: element.foto==null ? DEFAULT_URI : element.foto }} name={element.nombre} artist={element.idAlbum.u} props={this.props}></Element>
                  )
                }
              </ScrollView>
            </View>
          </View>


          <View style={styles.container}>
            <Text style={styles.title}>
              Playlists
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView horizontal={true}>
              {console.log("this.state.playlists: ", this.state.playlists)}
              {console.log("this.PROPS perfil**************: ", this.props)}
                {this.state.playlists.map(
                  element => 
                    <Element type='playlist' paramId={element.idRep.l_id} image = {{ uri: element.foto==null ? DEFAULT_URI : element.foto }} name={element.nombre} artist={element.idRep.u} props={this.props}></Element>
                  )
                }
              </ScrollView>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Podcasts
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView horizontal={true}>
              {console.log("this.state.podcasts: ", this.state.podcasts)}
                {this.state.podcasts.map(
                  element => 
                    <Element type='podcast' paramId={element.idPodcast.l_id} image = {{ uri: element.foto==null ? DEFAULT_URI : element.foto }} name={element.nombre} artist={element.idPodcast.u} props={this.props}></Element>
                  )
                }   
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      
    );
  }

  render(){
    //OPcion 1
   // console.log("this.state.loaded = ",this.state.loaded)
    if (this.state.loadedUser && this.state.loadedAlbums && this.state.loadedPlaylists && this.state.loadedPodcasts){
      //console.log("this.state = ",this.state)
      //console.log("user = ",this.state.user)
      //console.log("RENDERLOADED")
      return this.renderLoaded()
    }else{
      console.log("ELSEthis.state.loaded = ",this.state.loadedUser)
      //console.log("user = ",this.state.user)
      return(<View><Text>Loading...</Text></View>)
    }
    
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
    avatar: {
      flex: 1,
      borderWidth: 0.5,
      borderBottomWidth:4,
      borderBottomColor:"white",
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