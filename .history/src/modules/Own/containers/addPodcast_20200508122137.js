import React from 'react';
import {  StyleSheet, Text, View, TextInput, ImageBackground,Alert, Button,TouchableOpacity, ToastAndroid, AsyncStorage ,ScrollView} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';
import User from '../../DashBoard/containers/user';

export default class addPodcast extends React.Component {
  state={
    user: new User(),
    //email:"a@a.com",
    nombrePodcast:"",
    imagenPodcast:"",
    nombreCapituloAdd: "",
    uriCapituloAdd: "",
    cancionesPodcast:[],
    result:"",
    name:"",
    idalbum:"",
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

  goToaddAlbum= () =>{ 
    this.props.navigation.navigate( 'addAlbum' );
  };

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    this.state.uriCapituloAdd =result.uri;
    console.log("DEVULVE picker final:",this.state.uriCapituloAdd);
  }

  addSong = async () => {
    console.log("Cancion a añadir:");
    console.log("DEVULVE NOMBRE:",this.state.nombreCapituloAdd);
    console.log("DEVULVE URI:",this.state.uriCapituloAdd);

    if (this.state.nombreCapituloAdd != "" && this.state.uriCapituloAdd != ""){

      this.setState(state => {
          const cancionesPodcast = state.cancionesPodcast.concat({nombre:this.state.nombreCapituloAdd,URI:this.state.uriCapituloAdd});
          return {
            cancionesPodcast,
            nombreCapituloAdd:"",
            uriCapituloAdd:""
          };

          });

    }
    else if (this.state.nombreCapituloAdd == "" ) {
     Alert.alert('Introduzca nombre de la cancion');

    }
    else {
      Alert.alert('Introduzca la cancion');
    }
    console.log("--------------------Canciones añadidas----------------------");
    this.state.cancionesPodcast.forEach(element => console.log(element.nombre));
  }



 async bucleAddSong(element) {
    this.state.nombreP=element.nombre
    console.log("ELEMENT . NOMBRE:  ",element.nombre);

  
    await NetworkService.addCancionAlbum(element.nombre,element.URI,this.state.idalbum, this.state.user.correo)//this.state.user.correo
          .then( res => {this.state.result = res});
    //console.log("Resultadoooo añadir cancion",this.state.result)
  }




  crearAlbum = async () => {
    if (this.state.nombreAlbum != ""){
      console.log("Creando Album.....:  ",this.state.nombreAlbum);
      this.state.name=this.state.nombreAlbum
      console.log("-------------Canciones-----------------------");
      this.state.CancionesAlbum.forEach(element => console.log(element.nombre));
      console.log("USERRRRRRRRRRRRRRRRRRRRR:  ",this.state.user);
      await NetworkService.createAlbum(this.state).then( res => {this.state.result = res});
      console.log("ID del album",this.state.result.l_id);
      this.state.idalbum = this.state.result.l_id;
      this.state.user.correo = this.state.user.correo

      //Bucle creacion canciones 
      console.log("-------------Bucle Creacion Canciones-------------------");
      this.state.CancionesAlbum.forEach(element => this.bucleAddSong(element) );
    }
    else {  Alert.alert('Introduzca nombre del Album');}
  }




  
  render() {

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground source={require('../../../Wallpapers/fondoPantallaPrincipal.jpg')} style={styles.backgroundImage}>
            <View style={styles.inputView} >
            <Text style={styles.text}>{this.state.user.correo}</Text> 
            <Text style={styles.text}>{this.state.user.nick}</Text> 
            <Text style={styles.text}>  Nombre del Album </Text> 
              <TextInput  
                style={styles.inputText}
                placeholder=" Introduzca Nombre del Album..." 
                placeholderTextColor="#FFFFFF"
                onChangeText={text => this.setState({nombrePodcast:text})}/>
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
                onChangeText={text => this.setState({nombreCapituloAdd:text})}/>

                <TouchableOpacity style={styles.button}  onPress={this._pickDocument}>
                    <Text style={styles.text}>Seleccione Capitulo Podcast</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}  onPress={this.addSong}>
                    <Text style={styles.text}>"Introducir Capitulo Podcast"</Text>
                </TouchableOpacity>
                {this.state.CancionesAlbum.map(cancion =><Text style={styles.text}>  {cancion.nombre} </Text> )}
                <TouchableOpacity style={styles.button}  onPress={this.crearAlbum}>
                    <Text style={styles.text}>"Crear Podcast"</Text>
                </TouchableOpacity>
        
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