import React from 'react';
import {  StyleSheet, Text, View, TextInput, ImageBackground,Alert, Button,TouchableOpacity, ToastAndroid, AsyncStorage ,ScrollView} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';

export default class App extends React.Component {
  state={
    nombreAlbum:"",
    imagenAlbum:"",
    nombreCancionAdd: "",
    uriCancionAdd: "",
    CancionesAlbum:[]
  }
  goToaddAlbum= () =>{ 
    this.props.navigation.navigate( 'addAlbum' );
  };

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    this.state.uriCancionAdd =result.uri;
    console.log("DEVULVE picker final:",this.state.uriCancionAdd);
  }

  addSong = async () => {
    console.log("Cancion a añadir:");
    console.log("DEVULVE NOMBRE:",this.state.nombreCancionAdd);
    console.log("DEVULVE URI:",this.state.uriCancionAdd);

    if (this.state.nombreCancionAdd != "" && this.state.uriCancionAdd != ""){
        //modificar nombre cancion manualemnte de momento solo almaceno URI
        this.state.CancionesAlbum.push({nombre:this.state.nombreCancionAdd,URI:this.state.uriCancionAdd});
        this.state.uriCancionAdd="";
        this.state.nombreCancionAdd="";
    }
    else if (this.state.nombreCancionAdd == "" ) {
     Alert.alert('Introduzca nombre de la cancion');

    }
    else {
      Alert.alert('Introduzca la cancion');
    }
    console.log("--------------------Canciones añadidas----------------------");
    this.state.CancionesAlbum.forEach(element => console.log(element.nombre))
  }
  
  render() {

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
            <View style={styles.inputView} >
            <Text style={styles.text}>  Nombre del Album </Text> 
              <TextInput  
                style={styles.inputText}
                placeholder=" Introduzca Nombre del Album..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({nombreAlbum:text})}/>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 3,
                marginBottom:10,
              }}
             />
              <Text style={styles.text}>  Nombre cancion a añadir </Text> 
              <TextInput  
                style={styles.inputText}
                placeholder=" Introduzca Nombre de la cancion a añadir.." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({nombreCancionAdd:text})}/>

                <TouchableOpacity style={styles.button}  onPress={this._pickDocument}>
                    <Text style={styles.text}>Seleccione Cancion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}  onPress={this.addSong}>
                    <Text style={styles.text}>"Introducir Cancion"</Text>
                </TouchableOpacity>
                {this.state.CancionesAlbum.map(cancion =><Text style={styles.text}>  {cancion.nombre} </Text> )}
        
            </View>
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