import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, AsyncStorage } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Element from '../../DashBoard/containers/element'
import User from '../../DashBoard/containers/user'

export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state={
      user: new User(),//async () => await this.retrieveData(),
      albums: [],
      playlists:[],
      otrosStates : "valor que sea"
    }
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

  async componentDidMount(){
    setInterval(() => {
      this.setState(() => {
        console.log('setting state');
        //recuperar datos del usuario
        console.log("Antes retrieve data")
        let user_state;
        //Traes datos de usuario del AsyncStorage
        this.retrieveUser().then( res => {this.setState({user: res, loaded:true})}).catch(err => console.log("Error",err));
        
        //this.retrieveAlbums().then( res => {this.setState({albums: res});  return { user: user_state } }).catch(err => console.log("Error",err));
        
        //Traes data del usuario
        //¿Hacerlo todo junto?

      });
    }, 50000);
  }

  goToSettings = () => {this.props.navigation.navigate("Settings")}
  render(){
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
              <Ionicons name="md-settings" size={40} color="white" onPress={this.goToSettings} style={{position:'absolute', right: 10, bottom: 10}}></Ionicons>
            </ImageBackground>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your albums 
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView horizontal={true}>
                {/* //Mostrar cada album */}
                <Element type='album' props={this.props} image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" artist="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>


          <View style={styles.container}>
            <Text style={styles.title}>
              Your playlists
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView horizontal={true}>
                <Element type='album' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" artist="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your podcasts
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView horizontal={true}>
                <Element type='album' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" artist="cualquiera" ></Element>   
              </ScrollView>
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