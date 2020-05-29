import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import NetworkService from '../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';
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

export default class viewAlbum extends Component{
  constructor(props) {
    super(props);
    
  }

  state={
    album_info: "",
    loadedSongs: false,
    songs: [],
    selectedSong: "",
    cancionAdd: "",

  }

  componentDidMount(){

    //HAcer consulta de songs
    data={}
    data.user=this.props.route.params.artist
    data.idalbum = this.props.route.params.paramId
    data.idalbum = data.idalbum.toString()

    NetworkService.listSongsAlbum(data).then(res => {this.setState({songs: res, loadedSongs:true});console.log("Songs RES:", res)})//this.props.route.params.artist, this.props.route.params.paramId
    console.log("SONGS", this.state.songs)
    //Me devuelve una lista de canciones
  }
  

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    this.state.cancionAdd = result
    console.log("DEVULVE picker final:",result);
  }

  uploadSelectedSong = async () => {
    
    // this.state.nombreC=element.nombre
    console.log("ELEMENT . NOMBRE:  ",this.state.cancionAdd);

  
    NetworkService.addCancionAlbum(this.state.cancionAdd.name, this.state.cancionAdd.uri , this.props.route.params.paramId, this.props.route.params.artist)//this.state.user.correo
          .then( res => {this.state.result = res});
  }

  

  //Devuelve el id de album a mostrar que se ha guardado en................................
  retrieveAlbum = async (albumID) => {
    try {
      const retrieveItem = await AsyncStorage.getItem(albumID);
      if (retrieveItem !== null) {
        // We have data!!
        //console.log("DashBoardValue: ", retrieveItem);
        const item = JSON.parse(retrieveItem)
        //console.log("Item: ", item);
        return item;
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error al obtener datos")
    }
  };

  render(){
    //OPcion 1
    console.log("---------------------------viewAlbum------------------------------------------")
   // console.log("this.state.loaded = ",this.state.loaded)
    if (this.state.loadedSongs){
      //console.log("this.state = ",this.state)
      //console.log("user = ",this.state.user)
      //console.log("RENDERLOADED")
      //this.getAlbumsDB().then( res => {this.setState({albums: res}); console.log("GETALBUMS RES:", res);console.log("GETALBUMS ALBUMS:", this.state.albums)}).catch(err => console.log("Error",err));
      return this.renderLoaded()
    }else{
      //console.log("ELSEthis.state.loadedSongs = ",this.state.loadedSongs)
      return(<View><Text>Loading...</Text></View>)
    }
  
  }
  
  mostrarOpciones = () => {
    return(
      <ListItem
        key="hola"
        leftIcon={<Icon name='volume-up'
        type='font-awesome'
        color='#000'/>}
        
        rightIcon={
          <Icon name='ellipsis-h'
          type='font-awesome'
          color='#000'
          />
        }
        bottomDivider
      />
    )
  }

  //Guarda el state del usuario
  storePlaylist = async () => {
    try {
      await AsyncStorage.setItem('PlaylistNow', JSON.stringify(PLAYLIST));
      console.log("Guardando playlist...")
    } catch (error) {
        console.log("Fallo al guardar..")
      // Error saving data
    }
  };


  reproducirCancion(ruta){
    console.log("THIS.RUTAAAAAAAAAA", ruta)
    //obtener URL de canciones
    {
      let url
      this.state.songs.map((item, i) => (
        console.log("item: ", item),
       //NetworkService.pedirURL(idCancion.toString(),idAlbum.toString(),correo).then(
           url = BASE_URL + "Cancion?idsong=" + item.idCancion.c_id + item.idCancion.l_id.l_id + item.idCancion.l_id.u + ".mp3",
           console.log("URL reproducir: ",url),
           console.log("i ",i),
          //nomrbe, url, foto
          PLAYLIST[i] = new PlaylistItem(
            item.nombre,
            url,
            this.props.route.params.image.uri,
          )))
    }

    console.log("Playlist en viewALBUM-------------------------", PLAYLIST)
    //ruta.props.navigation.navigate("MusicPlayer", {playlist: PLAYLIST})
    this.storePlaylist().then(res => { console.log("GUARDADO! res:",res);ruta.props.navigation.navigate("MusicPlayer");})
    
  }

  renderLoaded(){
    console.log("Params",this.props.route.params)
    return(
      <ImageBackground source={require('../Wallpapers/fondo.jpg')} style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>
              Album name:
              {this.props.route.params.name}
            </Text>
            <Text style={styles.title}>
              Album id: {this.props.route.params.paramId}
            </Text>
            <Text style={styles.title}>
              Artist: {this.props.route.params.artist}
            </Text>
            <TouchableOpacity style={styles.loginBtn} onPress={this._pickDocument}>
              <Text style={styles.loginText}>Add new song to this album)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={this.uploadSelectedSong}>
              <Text style={styles.loginText}>Upload selected song</Text>
            </TouchableOpacity>
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
                      onPress={ () => {Alert.alert(
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
                        }}
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
        </ScrollView>
      </ImageBackground>
      
    );
  }
    
}

  const styles = StyleSheet.create({
    info: {
      flex: 1,
      flexDirection : 'row'
    },

    loginBtn:{
      width:"80%",
      backgroundColor:"#64EE85",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
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