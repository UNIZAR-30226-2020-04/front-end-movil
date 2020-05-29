import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView,FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import NetworkService from '../../../networks/NetworkService'


export default class addSongPlaylist extends Component{

  constructor (props) {
    super(props)
    this.state = {
   
      playlists : [],
      user:this.props.route.params.user,
      cancion:this.props.route.params.cancion

    }
  }
  componentDidMount(){
    
    this.state.user=this.props.route.params.user
   NetworkService.fetchPlaylists(this.state.user).then(res => {this.setState({playlists: res}); console.log("PLAYLISTT RESULLLLT",this.state.playlists)})
  
    }


  

  

  render(){

    let mostrar;
    
    mostrar = this.state.playlists.map(playlist => 
      <TouchableOpacity  onPress={() => NetworkService.addToPlaylistCancion(this.state.user.correo
                                        , this.props.route.params.cancion.idCancion.l_id.u,
                                        this.props.route.params.cancion.idCancion.l_id.l_id,
                                           playlist.idRep.l_id,
                                           this.props.route.params.cancion.idCancion.c_id)}>
      <Text  style={[styles.title,{marginTop: 20}]} >     
        { playlist.nombre }
      </Text> 
    </TouchableOpacity>
  )
 

    return(
      <View style={styles.container}>
          <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.screen}>
            <Text  style={[styles.title,{marginTop: 80}]} >     
                Añadir la cancion {this.props.route.params.cancion.nombre} a la playlist:
           </Text>
            {mostrar}
            
            </ScrollView>  
          </ImageBackground>
        
      </View>
    
    );
  }
}


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000',
    },

    screen: {
      flex:1,
      marginTop: 0,   
      resizeMode: "cover", 
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

    backgroundImage:{ 
      justifyContent: 'center',
      flex: 1,
      resizeMode: "contain"},

  });
  
  