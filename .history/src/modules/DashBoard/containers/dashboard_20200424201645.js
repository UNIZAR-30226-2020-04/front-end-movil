import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, ScrollView, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem,   } from 'react-native-elements'
import Element from './element'
import User from './user'



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
  constructor(props) {
    super(props);
    this.state={
      user: new User(),//async () => await this.retrieveData(),
      otrosStates : "valor que sea",
      loaded: false,
    }
    
  }

  

  retrieveData = async () => {
    try {
      const retrieveItem = await AsyncStorage.getItem('UserState');
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

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  componentDidMount(){
    //recuperar datos del usuario
    console.log("Antes retrieve data")
    //recuperar datos del usuario
    console.log("Antes retrieve data")
    let user_state;
    this.retrieveData().then( res => {this.state.user.setState(user_state);this.setState({loaded: true})}).catch(err => console.log("Error",err));
    //this.setState({user: user_state, loaded: true})
    
    console.log("user_state",user_state);
    
    //Asigna a state los campos de user
     //this.state.user.setState(user_state)
   
     // Correcto
    // this.state.user.setState(
    //   user_state
    //Instead, assign to `this.state` directly or define a `state = {};
    
    //this.state.loaded = true;
    //this.setState({user: user_state, loaded: true})
    console.log("this.state",this.state);

    // console.log("Hello");
    // await this.sleep(2000);
    // console.log("World!");
    //this.setState( {otrosStates: "PUta mierda"})

      
    //   ,function () {
    //   console.log(this.state.user.state);
    //   });

     //Asigno al objeto user dentro de state los campos de user
     //Object.assign(this.state.user,data)
     //this.state.user.setState(data)
     console.log("state completo:",this.state)
  }


  renderLoaded(){
    return(
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.backgroundImage}>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={[styles.container]}>
            <Text style={[styles.title, {marginTop: 70}]}>
              Hi {this.state.user.nick} !
            </Text>

            <Text style={styles.title}>
              Songs recently listened
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>


          <View style={styles.container}>
            <Text style={styles.title}>
              Playlist recently listened
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Podcast recently listened
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
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
  
  