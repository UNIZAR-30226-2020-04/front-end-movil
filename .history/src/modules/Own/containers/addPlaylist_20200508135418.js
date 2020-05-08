import React from 'react';
import {  StyleSheet, Text, View, TextInput, ImageBackground,Alert, Button,TouchableOpacity, ToastAndroid, AsyncStorage ,ScrollView} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';
import User from '../../DashBoard/containers/user';

export default class addPlaylist extends React.Component {
  state={
    user: new User(),
    nombrePlaylist: "",
    idplaylist: "",
    addCancionPlaylist: "",
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

  componentDidMount(){
    //recuperar datos del usuario
    console.log("Antes retrieve data")
    //recuperar datos del usuario
    console.log("Antes retrieve data")
    let user_state;
    this.retrieveData().then( res => {this.setState({user: res, loaded:true});}).catch(err => console.log("Error",err));
    console.log("user_state",user_state);
    console.log("this.state",this.state);
    console.log("state completo:",this.state)
  }

  createPlaylist = async () => {
    if (this.state.nombrePlaylist != ""){
      console.log("Creando Playlist.....:  ",this.state.nombrePlaylist);
      await NetworkService.createPlaylist(this.state).then( res => {this.state.result = res});
      console.log("ID de la palylist",this.state.result.l_id);
      this.state.idplaylist = this.state.result.l_id;
    }
    else {  Alert.alert('Introduzca nombre de la Playlist');}
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
            <View style={styles.inputView} >
            <Text style={styles.text}>{this.state.user.correo}</Text> 
            <Text style={styles.text}>{this.state.user.nick}</Text> 
            <Text style={styles.text}>  Nombre de la playlist </Text> 
              <TextInput  
                style={styles.inputText}
                placeholder=" Introduzca nombre de la playlist..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({nombrePlaylist:text})}/>
            </View>

            <TouchableOpacity style={styles.button}  onPress={this.createPlaylist}>
              <Text style={styles.text}>Crear Playlist</Text>
          </TouchableOpacity>

        </ImageBackground>
       </ScrollView>
  
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage:{ 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
    alignItems: "center",
    marginTop: 10,
    marginBottom:10,
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    color:'white',//'#64EE85',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 10
  },

  scrollView: {
    backgroundColor: 'pink',
  },

  body : {
    alignItems : 'center',
    justifyContent : 'center',
    fontSize: 17,
    color: '#ffffff'
  },
  loginText:{
    color:"white"
  },

  inputView:{
    width:"80%",
    borderRadius:25,
    height: 50,
    marginBottom:20,
    marginTop:20,
    justifyContent:"center",
    padding:5
  },

  inputText:{
    height:40,
    color:"black",
    marginTop: 20,
    marginBottom: 25,
    fontSize: 15,
    backgroundColor: '#fff',


  },

});