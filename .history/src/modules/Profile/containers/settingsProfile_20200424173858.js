import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import Element from '../../DashBoard/containers/element'
import NetworkService from '../../../networks/NetworkService'
import User from '../../DashBoard/containers/user'
import { 
  MenuProvider, 
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger, } from 'react-native-popup-menu';

export default class Main extends Component{
  constructor(){
    this.state={
    user: new User(),
    resul: "",
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
  
  async componentDidMount(){
    //recuperar datos del usuario
    console.log("Antes retrieve data")
    let user_state;
    await this.retrieveData().then( res => {user_state = res});
    this.setState({user: user_state, loaded: true})

    console.log("Hello");
    await this.sleep(2000);
    console.log("World!");
    console.log("state completo:",this.state)
  }

  updateUserData = async () =>{
    console.log("this.state",this.state.user)
    await NetworkService.updateUserData(this.state.user).then( res => {this.state.resul = res});
    if(this.state.resul == true){
      console.log("Nombre cambiado")
    }else{
      console.log("error cambiar nombre")
    }
  }

   deleteUser = async () =>{
    console.log("this.state",this.state.user)
    await NetworkService.deleteUser(this.state.user).then( res => {this.state.resul = res}).catch(
      err=>{
        console.log("Error: ",err);
      }
    );
    if(this.state.resul == true){
      console.log("cuenta borrada")
    }else{
      console.log("error borrar cuenta")
    }
  }

  render(){
    return(
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.container}>
        <ScrollView style={styles.screen}>
            <View style={{alignItems: 'center'}}>
                <Text style={[styles.text, {fontSize: 24,fontWeight: '600', marginTop: 10}]}>Select an element to edit</Text>
            </View>
          {/* Contenedor de info y imagen */}
          <View style={{height: 200, marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <View style={styles.info}>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginLeft: 5}]}>Username</Text>
              <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder={this.state.user.username}
                  placeholderTextColor="#FFFFFF"
                  onChangeText={text => this.state.user.setState({newUsername: text})}/>
              </View>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginTop: 10}]}>Info</Text>
              <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder={this.state.user.info}
                  placeholderTextColor="#FFFFFF"
                  onChangeText={text => this.setState({password:text})}/>
              </View>
            </View>
            <TouchableOpacity style={styles.deleteBtn} onPress={this.updateUserData}>
              <Text style={styles.loginText}>Update user data</Text>
            </TouchableOpacity>


          </View>
          

          <View style={styles.container}>
            <Text style={styles.title}>
              Your songs 
            </Text>
            
            <MenuProvider>
                    <Menu >
                      <MenuTrigger>
                      <Element type={'song'} image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>

                      </MenuTrigger>
                      <MenuOptions>
                        <ScrollView style={{ maxHeight: 200 }}>
                          <MenuOption value={"getSongName()"} text={"Delete ${value}"} onSelect={type => alert(`Deleted song: ${type}`)} style={{color: 'white'}}/>
                        </ScrollView>
                      </MenuOptions>
                    </Menu>     
              </MenuProvider>

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

          <TouchableOpacity style={styles.deleteBtn} onPress={this.deleteUser}>
              <Text style={styles.loginText}>Delete account</Text>
            </TouchableOpacity>

            <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder={"Re-write your password to delete account"}
                  placeholderTextColor="#FFFFFF"
                  onChangeText={text => this.setState({user: {passwordCheck: {passwordCheck:text}}})}/>
              </View>
          
        </ScrollView>
      </ImageBackground>
      
    );
  }
  }


  const styles = StyleSheet.create({
    info: {
      flex: 1,
    },

    inputView:{
      width:"80%",
      height: 55,
      backgroundColor:"#64EE85",
      borderRadius:50,
      justifyContent:"center",
      padding:20
    },

    profileImage: {
      flex: 1,

    },

    container: {
      flex:1,
      backgroundColor: 'transparent',
    },

    screen: {
      marginTop: 70,
      backgroundColor: 'transparent',   
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

    deleteBtn:{
      width:"80%",
      backgroundColor:"red",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },

    loginText:{
      color:"white"
    }

  });
  
  
  