import React, { Component, useReducer } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import NetworkService from '../../../networks/NetworkService'
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'

class PlaylistItem {
	constructor(name, uri, image) {
		this.name = name;
		this.uri = uri;
		this.image = image;
	}
}

const BASE_URL = "http://pruebaslistenit.herokuapp.com/";

const PLAYLIST = [];

export default class AlbumSearch extends Component{
  constructor(props) {
    super(props);
    data={}
    
    album_info=this.props.route.params;
    data.user=this.props.route.params.autor

    data.idalbum = this.props.route.params.idAlbum.l_id


    data.idalbum = data.idalbum.toString()

  }

  state={
    album_info: "",
    loadedSongs: false,
    songs: [],
    //User es usuario logeado
    user:""
  }

  componentDidMount(){

    //HAcer consulta de songs
    data={}
    this.retrieveUser().then( res => {this.setState({user: res})


    data.user=this.props.route.params.idAlbum.u
    data.idalbum = this.props.route.params.idAlbum.l_id
   
    
    data.idalbum = data.idalbum.toString()
  

    NetworkService.listSongsAlbum(data).then(res => {this.setState({songs: res, loadedSongs:true});console.log("Songs RES:", res)})
  }) 
  
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
    //OPcion 1
    console.log("---------------------------viewAlbumSearch------------------------------------------")
   // console.log("this.state.loaded = ",this.state.loaded)
    if (this.state.loadedSongs){
      console.log("this.state = ",this.state)
      console.log("user = ",this.state.user)
      console.log("RENDERLOADED")
      console.log("MOSTRANDO AUXX AUXX AUXX AUXX", this.state.aux)
      //this.getAlbumsDB().then( res => {this.setState({albums: res}); console.log("GETALBUMS RES:", res);console.log("GETALBUMS ALBUMS:", this.state.albums)}).catch(err => console.log("Error",err));
      return this.renderLoaded()
    }else{
      console.log("ELSEthis.state.loadedSongs = ",this.state.loadedSongs)
      return(<View><Text>Loading...</Text></View>)
    }
  
  }
  mostrarOpciones(cancion){
    Alert.alert(
      'Seleccione Opciones',
      ' ',
      [
        {
          text: 'Return',
          onPress: () => console.log('Return')
        },
        {
          text: 'Seguir',
          onPress: () => this.goToseguir(this.state.user, cancion),
          style: 'cancel'
        },
        { text: 'MG', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
     
  }


async goToseguir(user, cancion) {
      let data = {}
      data.user=user
      data.cancion=cancion
      console.log("Estoy en goToseguirDatatatatata",data)
     
      this.props.navigation.navigate('addSongPlaylist',data)
}

  retrieveUser = async () => {
    try {
      const retrieveItem = await AsyncStorage.getItem('UserState');
      if (retrieveItem !== null) {
        // We have data!!
        console.log("Profile: ", retrieveItem);
        const item = JSON.parse(retrieveItem)
        console.log("Item: ", item);
        return item;
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error al obtener datos")
    }
  };


  //Guarda el state del usuario
  storePlaylist = async () => {
    try {
      await AsyncStorage.setItem('PlaylistNow', JSON.stringify(PLAYLIST));
      console.log("Guardando playlist...")
    } catch (error) {
        console.log("Fallo al guardar..")
      // Error saving data
    }
  }


  reproducirCancion(ruta){
  
    //obtener URL de canciones
    {
      let url
      this.state.songs.map((item, i) => (
        console.log("itemSearchhWiew: ", item),
       //NetworkService.pedirURL(idCancion.toString(),idAlbum.toString(),correo).then(
           url = BASE_URL + "Cancion?idsong=" + item.idCancion.c_id + item.idCancion.l_id.l_id + item.idCancion.l_id.u + ".mp3",
           console.log("URL reproducir: ",url),
           console.log("i ",i),
          //nomrbe, url, foto
          console.log("AQUIIIIIIIIIIIIIIIIIIIIIIII:", item.nombre,
          url,
          "https://picsum.photos/200/300",),
        


          PLAYLIST[i] = new PlaylistItem(
            item.nombre,
            url,
            this.props.route.params.foto,
          )))
    }

    console.log("Playlist en viewALBUM-------------------------", PLAYLIST)
    //ruta.props.navigation.navigate("MusicPlayer", {playlist: PLAYLIST})
    this.storePlaylist().then(res => { console.log("Mostrandooooo ruta.props",ruta);this.props.navigation.navigate("MusicPlayer");})
    
  }

  renderLoaded(){
    
    return(
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Album name:
              {this.props.route.params.name}
            </Text>
            <Text style={styles.title}>
              Album id: {this.props.route.params.idAlbum.l_id}
            </Text>
            <Text style={styles.title}>
              Artist: {this.props.route.params.autor}
            </Text>
            <View>
              {
                this.state.songs.map((item, i) => (
                  <ListItem
                    key={item}
                    leftIcon={<Icon name='volume-up'
                    type='font-awesome'
                    color='#000'/>}
                    rightIcon={
                      <Icon name='ellipsis-h'
                      type='font-awesome'
                      color='#000'
                      onPress={() => this.mostrarOpciones(item)}
                      />
                    }
                    title={item.nombre} //Song
                    subtitle={item.idCancion.l_id.u} //Artist
                    onPress={ () => {this.reproducirCancion(this.props.route.params)}}//this.reproducirCancion(this.props.route.params)
                    bottomDivider
                  />
                ))
              }
            </View>
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