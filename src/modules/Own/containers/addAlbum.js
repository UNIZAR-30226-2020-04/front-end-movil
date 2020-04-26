import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button,ImageBackground,ScrollView} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';

export default class App extends React.Component {
  state={
    nombreAlbum:"e@e.com",
    imagenAlbum:"1",
    cancionAdd: null,
    cancionesAlbum:" ",
  }
  

  render() {
    goToaddAlbum= () =>{ 
      this.props.navigation.navigate( 'addAlbum' );
    };


  
  
        
    return (
  
       <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.container}>
       <ScrollView style={styles.scrollView}>
    
              <TextInput  
                style={styles.inputText}
                placeholder="Nombre del Album..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({nombreAlbum:text})}/>
      
        </ScrollView>
        </ImageBackground>
  
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    backgroundColor: 'black',
    padding: 25,
  },
  text: {
    color:'white',//'#64EE85',
    fontSize: 24,
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
    backgroundColor:"#465881",
    borderRadius:25,
    height: 50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },


});