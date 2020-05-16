import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import NetworkService from '../networks/NetworkService'
import { ListItem } from 'react-native-elements'

export default class viewAlbum extends Component{
  constructor(props) {
    super(props);
    
  }

  state={
    album_info: "",
    loadedSongs: false,
    songs: []

  }

  componentDidMount(){

    //HAcer consulta de songs
    data={}
    data.user=this.props.route.params.artist
    data.idalbum = this.props.route.params.paramId
    data.idalbum = data.idalbum.toString()

    NetworkService.listSongsAlbum(data).then(res => {this.setState({songs: res, loadedSongs:true});console.log("Songs RES:", res)})//this.props.route.params.artist, this.props.route.params.paramId
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
    //OPcion 1
    console.log("---------------------------NUEVA------------------------------------------")
   // console.log("this.state.loaded = ",this.state.loaded)
    if (this.state.loadedSongs){
      console.log("---------------------------1------------------------------------------")
      console.log("this.state = ",this.state)
      console.log("user = ",this.state.user)
      console.log("RENDERLOADED")
      //this.getAlbumsDB().then( res => {this.setState({albums: res}); console.log("GETALBUMS RES:", res);console.log("GETALBUMS ALBUMS:", this.state.albums)}).catch(err => console.log("Error",err));
      return this.renderLoaded()
    }else{
      console.log("---------------------------2------------------------------------------")
      console.log("ELSEthis.state.loadedSongs = ",this.state.loadedSongs)
      return(<View><Text>Loading...</Text></View>)
    }
  
  }

  renderLoaded(){
    console.log("Params",this.props.route.params)
    return(
      <ImageBackground source={require('../Wallpapers/fondo.jpg')} style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Album name:
              {this.props.route.params.album_name}
            </Text>
            <Text style={styles.title}>
              Album id: {this.props.route.params.paramId}
            </Text>
            <Text style={styles.title}>
              Artist: {this.props.route.params.artist}
            </Text>
            <View>
              {
                this.state.songs.map((item, i) => (
                  <ListItem
                    key={item}
                    leftIcon={ <Ionicons name="volume-high-outline" size={40} color="white" onPress={this.goToSettings} style={{position:'absolute', right: 10, bottom: 10}}></Ionicons>}
                    title={item.nombre} //Song
                    subtitle={item.idCancion.l_id.u} //Artist
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