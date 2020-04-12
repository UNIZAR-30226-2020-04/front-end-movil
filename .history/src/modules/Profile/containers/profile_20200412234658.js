import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Element from '../../DashBoard/containers/element'
import User from '../../DashBoard/containers/user'

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state={
      user: new User(),//async () => await this.retrieveData(),
      otrosStates : "valor que sea"
    }
  }

  retrieveData = async () => {
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
    //recuperar datos del usuario
    const user_state = await this.retrieveData()
    console.log("user_state Perfil", user_state)
    //Asigna a state los campos de user
     //this.state.user.setState(user_state)
   
     // Correcto
    // this.state.user.setState(
    //   user_state
    //Instead, assign to `this.state` directly or define a `state = {};
    this.setState({user: user_state})
    console.log("User prfile:", this.state.user)
    //this.setState( {otrosStates: "PUta mierda"})
  }

  goToSettings = () => {this.props.navigation.navigate("Settings")}
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.screen}>
          <View style={styles.header}>
            <ImageBackground style={styles.avatar}
                  source={{uri: 'https://picsum.photos/200/300'}}
            >
              <Text style={styles.headerName}>{this.state.user.nick} </Text>
              <Text style={styles.userInfo}>eduardico@mail.com </Text>
              <Ionicons name="md-settings" size={40} color="white" onPress={this.goToSettings} style={{position:'absolute', right: 10, bottom: 10}}></Ionicons>
            </ImageBackground>
            
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your songs 
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
              >
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>


          <View style={styles.container}>
            <Text style={styles.title}>
              Your playlists
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
              >
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your podcasts
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
              >
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
                <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      
    );
  }
}

  const styles = StyleSheet.create({
    info: {
      flex: 1,
      flexDirection : 'row'
    },

    container: {
      flex:1,
      backgroundColor: '#000',
      paddingTop: 20,
    },

    screen: {
      marginTop: 0,
      backgroundColor: '#000',   
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
      borderWidth: 4,
      borderColor: "white",
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