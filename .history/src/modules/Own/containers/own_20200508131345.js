import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image,ImageBackground } from 'react-native';


export default class App extends React.Component {
  
            goToaddAlbum= () =>{ 
              this.props.navigation.navigate('addAlbum');
            };

            goToaddPodcast= () =>{ 
              this.props.navigation.navigate('addPodcast');
            };

            goToRemoveAlbum= () =>{ 
              this.props.navigation.navigate('MainLogged', { screen: 'DashBoard' } );
            };

            goToRemovePodcast= () =>{ 
              this.props.navigation.navigate('MainLogged', { screen: 'DashBoard' } );
            };


  render() {
    return (
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.container}>
      <View style={styles.inputView} >
          <TouchableOpacity style={styles.button}  onPress={this.goToaddAlbum}>
              <Text style={styles.text}>Subir Album</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}  onPress={this.goToaddPodcast}>
              <Text style={styles.text}>Subir Podcast</Text>
          </TouchableOpacity>
      </View> 
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
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: 'black',
    padding: 25,
  },
  text: {
    color:'white',//'#64EE85',
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 10
    
   
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
  



});