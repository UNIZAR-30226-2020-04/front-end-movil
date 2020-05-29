import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView,FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import NetworkService from '../../../networks/NetworkService'


export default class Search extends Component{

  constructor () {
    super()
    this.state = {
      textSearch: "",
      selectedIndex: 2,
      resultados : []

    }

    this.arrayData=[]
    this.updateIndex = this.updateIndex.bind(this)
  }

  async updateIndex (selectedIndex) {
    this.state.selectedIndex=selectedIndex;
    console.log("Como va el indexxx loco: ",this.state.selectedIndex)
    let respuesta = "respuesta vacia"
   
    if(this.state.selectedIndex==0){
    await NetworkService.searchArtistas(this.state.textSearch).then( res => {respuesta= res});
    console.log("Resultado de la busqueda Artistas",respuesta)
    }
   else if(this.state.selectedIndex==1){
      await NetworkService.searchAlbums(this.state.textSearch).then( res => {respuesta= res});
      console.log("Resultado de la busqueda Albums",respuesta)
    }
    else if(this.state.selectedIndex==2){
      await NetworkService.searchPlaylist(this.state.textSearch).then( res => {respuesta= res});
      console.log("Resultado de la busqueda Playlist",respuesta)
    }
    else if(this.state.selectedIndex==3){
      await NetworkService.searchPodcast(this.state.textSearch).then( res => {respuesta= res});
      console.log("Resultado de la busqueda Podcast",respuesta)
    }
  
    this.setState({
      resultados: respuesta,
      selectedIndex: selectedIndex
    });



  }

  async SearchFilterFunction(text) {
    let respuesta = "respuesta vacia"
   
    if(this.state.selectedIndex==0){
    await NetworkService.searchArtistas(text).then( res => {respuesta= res});
    console.log("Resultado de la busqueda Artistas",respuesta)
    }
   else if(this.state.selectedIndex==1){
      await NetworkService.searchAlbums(text).then( res => {respuesta= res});
      console.log("Resultado de la busqueda Albums",respuesta)
    }
    else if(this.state.selectedIndex==2){
      await NetworkService.searchPlaylist(text).then( res => {respuesta= res});
      console.log("Resultado de la busqueda Playlist",respuesta)
    }
    else if(this.state.selectedIndex==3){
      await NetworkService.searchPodcast(text).then( res => {respuesta= res});
      console.log("Resultado de la busqueda Podcast",respuesta)
    }
  
    this.setState({
      resultados: respuesta,
      textSearch: text,
    });
  }

  render(){
 
    const { selectedIndex } = this.state
    const buttons = ['Artists', 'Albums', 'Playlist', 'Podcast', ]

    let mostrar;
    let resultados;
    if (selectedIndex==0) {
      console.log("Mostrando Artistas",this.state.resultados)
      if (this.state.resultados!=null){
        <Text style={[styles.title,{marginTop: 10}]}>
        Resultados {this.state.resultados.length} 
      </Text>
         resultados=  <Text style={[styles.title,{marginTop: 10}]}>
                         Resultados: {this.state.resultados.length} 
                      </Text>

         mostrar =    this.state.resultados.map(user => 
                          <TouchableOpacity  onPress={() => this.props.navigation.navigate('profileSearch', user)}>
                          <Text  style={[styles.title,{marginTop: 10}]} > 
                          
                            { user.nombre }
                          </Text> 
                        </TouchableOpacity>
                    )
      }
      else {   mostrar= <Text  style={[styles.title,{marginTop: 10}]}> Sin resultados  </Text> }
                
    }

    ///Visualizacion Albums
    else if(selectedIndex==1) {
      if (this.state.resultados!=null){
        <Text style={[styles.title,{marginTop: 10}]}>
        Resultados {this.state.resultados.length} 
      </Text>
         resultados=  <Text style={[styles.title,{marginTop: 10}]}>
                         Resultados: {this.state.resultados.length} 
                      </Text>

         mostrar =    this.state.resultados.map(album => 
                            //////////////////////////////////////////////////////////////Cambiar que te lleve al album.
                          <TouchableOpacity  onPress={() => this.props.navigation.navigate('albumSearch', album)}>
                          <Text  style={[styles.title,{marginTop: 10}]} > 
                            { album.nombre }
                          </Text> 
                        </TouchableOpacity>
                    )
      }
      else {   mostrar= <Text  style={[styles.title,{marginTop: 10}]}> Sin resultados  </Text> }

    }

    ///Visualizacion Playlists
    else if(selectedIndex==2) {
      if (this.state.resultados!=null){
        <Text style={[styles.title,{marginTop: 10}]}>
        Resultados {this.state.resultados.length} 
      </Text>
         resultados=  <Text style={[styles.title,{marginTop: 10}]}>
                         Resultados: {this.state.resultados.length} 
                      </Text>

         mostrar =    this.state.resultados.map(playlist=> 
                            //////////////////////////////////////////////////////////////Cambiar que te lleve a playlist.
                          <TouchableOpacity  onPress={() => this.props.navigation.navigate('playlistSearch', playlist)}>
                          <Text  style={[styles.title,{marginTop: 10}]} > 
                            { playlist.nombre }
                          </Text> 
                        </TouchableOpacity>
                    )
      }
      else {   mostrar= <Text  style={[styles.title,{marginTop: 10}]}> Sin resultados  </Text> }
    }

    //Visualizacion podcast
    else if(selectedIndex==3) {
      if (this.state.resultados!=null){
        <Text style={[styles.title,{marginTop: 10}]}>
        Resultados {this.state.resultados.length} 
      </Text>
         resultados=  <Text style={[styles.title,{marginTop: 10}]}>
                         Resultados: {this.state.resultados.length} 
                      </Text>

         mostrar =    this.state.resultados.map(podcast=> 
                            //////////////////////////////////////////////////////////////Cambiar que te lleve a podcast.
                          <TouchableOpacity  onPress={() => this.props.navigation.navigate('profileSearch', user)}>
                          <Text  style={[styles.title,{marginTop: 10}]} > 
                            { podcast.nombre }
                          </Text> 
                        </TouchableOpacity>
                    )
      }
      else {   mostrar= <Text  style={[styles.title,{marginTop: 10}]}> Sin resultados  </Text> }
    }



    return(
      <View style={styles.container}>
          <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.screen}>
              <SearchBar
                round
                searchIcon={{ size: 24 }}
                containerStyle={{marginTop: 70, backgroundColor: 'transparent', borderBottomColor: 'transparent',
                borderTopColor: 'transparent' }}
                
                inputContainerStyle={{backgroundColor: '#fff'}}
              
                onChangeText={text => this.SearchFilterFunction(text)}
                onClear={text => this.SearchFilterFunction('')}
                
                placeholder="Busque aqui..."
                value={this.state.textSearch}
              />

              <ButtonGroup 
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 50, marginTop: 20}}
                containerBorderRadius={50}
                textStyle={{color:'black'}}
                selectedButtonStyle={{backgroundColor: '#64EE85'}}
                selectedTextStyle={{color: 'white'}}
              />
              {resultados}
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
  
  