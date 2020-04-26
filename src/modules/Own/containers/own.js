import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image,} from 'react-native';


export default class App extends React.Component {
  
            goToaddAlbum= () =>{ 
              this.props.navigation.navigate('addAlbum');
            };

            goToaddPodcast= () =>{ 
              this.props.navigation.navigate('MainLogged', { screen: 'DashBoard' } );
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
      <TouchableOpacity style={styles.button}  onPress={this.goToaddAlbum}>
          <Text style={styles.text}>Subir Album</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={this.goToaddAlbum}>
          <Text style={styles.text}>Subir Podcast</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={this.goToaddAlbum}>
          <Text style={styles.text}>Borrar Album</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={this.goToaddAlbum}>
          <Text style={styles.text}>Borrar Podcast</Text>
      </TouchableOpacity>
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
  



});