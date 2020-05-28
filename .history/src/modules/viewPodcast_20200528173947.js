import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import NetworkService from '../networks/NetworkService'
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class viewPodcast extends Component{
  constructor(props) {
    super(props);
    
  }

  state={
    podcast_info: "",
    loadedSongs: false,
    songs: [],

  }

  componentDidMount(){

    //HAcer consulta de songs
    data={}
    data.user=this.props.route.params.artist
    data.idalbum = this.props.route.params.paramId
    data.idalbum = data.idpodcast.toString()
    console.log("********************************")
    console.log("DATA PODCAST",data)
    NetworkService.listSongsPodcast(data).then(res => {this.setState({songs: res, loadedSongs:true});console.log("Songs RES:", res)})//this.props.route.params.artist, this.props.route.params.paramId
    //Me devuelve una lista de canciones
  }

  //Devuelve el id de podcast a mostrar que se ha guardado en................................
  retrievePodcast = async (podcastID) => {
    try {
      const retrieveItem = await AsyncStorage.getItem(podcastID);
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
      //this.getPodcastsDB().then( res => {this.setState({podcasts: res}); console.log("GETALBUMS RES:", res);console.log("GETALBUMS ALBUMS:", this.state.podcasts)}).catch(err => console.log("Error",err));
      return this.renderLoaded()
    }else{
      console.log("---------------------------2------------------------------------------")
      console.log("ELSEthis.state.loadedSongs = ",this.state.loadedSongs)
      return(<View><Text>Loading...</Text></View>)
    }
  
  }
  mostrarOpciones(){
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

  renderLoaded(){
    console.log("Params",this.props.route.params)
    return(
      <ImageBackground source={require('../Wallpapers/fondo.jpg')} style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Podcast name:
              {this.props.route.params.name}
            </Text>
            <Text style={styles.title}>
              Podcast id: {this.props.route.params.paramId}
            </Text>
            <Text style={styles.title}>
              Artist: {this.props.route.params.artist}
            </Text>
            <TouchableOpacity style={styles.loginBtn} onPress={this.goLogin}>
              <Text style={styles.loginText}>Add new song to this album)</Text>
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
                      onPress={() => this.mostrarOpciones()}
                      />
                    }
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