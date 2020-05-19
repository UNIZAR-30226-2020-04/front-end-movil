import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, ScrollView, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Element from '../../DashBoard/containers/element'
import NetworkService from '../../../networks/NetworkService'
import User from '../../DashBoard/containers/user'
import { 
  MenuProvider, 
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger, } from 'react-native-popup-menu';


  const DEFAULT_URI = "http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg"
  ///AHORA: retocar storeData, no guarda

export default class Main extends Component{
  state={
    user: new User(),
    resul: "",
  }

  // "correo": "e@e.com",
  //   "fNacimiento": "dsf",
  //   "foto": null,
  //   "nick": "ediaz",
  //   "nombre": "W",
  //   "pass": "1",
  //   "podcasts": Array [],

  // Campos Input
  // newName
  // newNick
  // pass
  // newPass
  // passwordCheck

  retrieveData = async () => {
    try {
      const retrieveItem = await AsyncStorage.getItem('UserState');
      if (retrieveItem !== null) {
        // We have data!!
        console.log("--------------------RETRIEVE-----------------: ", retrieveItem);
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
    console.log("Antes retrieve data")
    let user_state;
    await this.retrieveData().then( res => {user_state = res});
    this.setState({user: user_state, loaded: true})

    console.log("Hello");
    console.log("World!");
    console.log("state completo:",this.state)
  }

  //Pick a document from filesystem
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log("Archivo seleccionado: ", result.uri)
    //await NetworkService.uploadFoto(result.uri)
  }

  //Guarda el state del usuario
  storeUser = async () => {
    try {
      console.log("------GUARDAR USER------")
      await AsyncStorage.setItem('UserState', JSON.stringify(this.state.user));
      console.log("Guardado this.user: ", this.state.user)
    } catch (error) {
        console.log("Fallo al guardar..")
      // Error saving data
    }
  };

  updateUserData = async () =>{
    console.log("this.state",this.state.user)
    //comprobar campos 
    if(this.state.user.newName != null){
      await NetworkService.updateUserName(this.state.user).then( res => {this.state.resulUpdateName = res});
      if(this.state.resulUpdateName == false){ToastAndroid.show('Error update name', ToastAndroid.SHORT)}
      else{
        //Ha IDO bien
        this.state.user.nombre = this.state.user.newName
      }
    }
    if(this.state.user.newNick != null){
      await NetworkService.updateUserNick(this.state.user).then( res => {this.state.resulUpdateNick = res});
      if(this.state.resulUpdateNick == false){ToastAndroid.show('Error update nick', ToastAndroid.SHORT)}
      else{
        //Ha IDO bien
        this.state.user.nick = this.state.user.newNick
      }
    }
    if(this.state.user.pass != null && this.state.user.newPass != null){
      await NetworkService.updateUserPass(this.state.user).then( res => {this.state.resulUpdatePass = res});
      if(this.state.resulUpdatePass == false){ToastAndroid.show('Error update pass', ToastAndroid.SHORT)}
      else{
        //Ha IDO bien
        this.state.user.pass = this.state.user.newPass
      }
    }

    //Guardar usuario
    console.log("antes storeData")
    await AsyncStorage.clear()
    await this.storeUser()
    //await NetworkService.updateUserData(this.state.user).then( res => {this.state.resul = res});
    if(this.state.resulUpdateName == true && this.state.resulUpdateNick == true && this.state.resulUpdatePass == true){
      ToastAndroid.show('Datos actualizados', ToastAndroid.SHORT)
      //Guardar datos en storeData
      
    }else{
     
      
      
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
      ToastAndroid.show('Account deleted', ToastAndroid.SHORT)
      this.props.navigation.navigate('Home');
    }else{
      console.log("Error deleting account")
    }
  }
  
  render(){
    return(
      <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.container}>
        <ScrollView style={styles.screen}>
          {/* Seccion de foto etc.. */}
          <View style={styles.header}>
            <ImageBackground style={styles.avatar}
                  source={{uri: 'https://picsum.photos/250/300'}}
            >

            <TouchableOpacity onPress={this._pickDocument} style={{
                //width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute', //Here is the trick
                bottom: 0, //Here is the trick
              }}>
                <Text style={styles.headerText}>Edit profile image </Text>
                <Text style={styles.headerText}>Props {this.props.route.params.props.podcasts} </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{alignItems: 'center'}}>
              <Text style={[styles.text, {fontSize: 24,fontWeight: '600', marginTop: 10}]}>{this.state.user.nombre}</Text>
              <Text style={[styles.text, {fontSize: 24,fontWeight: '600', marginTop: 10}]}>Select an element to edit</Text>
          </View>

          

          <View style={styles.container}>
            <Text style={styles.title}>
              Your albums 
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              

              <MenuProvider>
                <Menu >
                  <MenuTrigger>
                    <ScrollView horizontal={true}>
                    {/* //Mostrar cada album */}
                    {/* Recorrer array de albumes y crear Element */}
                    {console.log("this.state.albums: ", this.state.albums)}
                    {this.props.route.params.props.albums.map(
                      element => 
                        <Element delete='true' type='album' paramId={element.idAlbum.l_id} image = {{ uri: element.foto==null ? DEFAULT_URI : element.foto }} name={element.nombre} artist={element.idAlbum.u} props={this.props}></Element>
                      )
                    }
                    </ScrollView>
                  </MenuTrigger>
                  <MenuOptions>
                    <ScrollView style={{ maxHeight: 200 }}>
                      <MenuOption value={"getAlbumName()"} text={"Delete"} onSelect={type => alert(`Deleted album: ${type}`)} style={{color: 'white'}}/>
                    </ScrollView>
                  </MenuOptions>
                </Menu>     
            </MenuProvider>
                
              
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your playlists
            </Text>
            <View style={{height: 200, marginTop: 20}}>

            <MenuProvider>
                <Menu >
                  <MenuTrigger>
                  <ScrollView horizontal={true}>
                    {console.log("this.state.playlists: ", this.state.playlists)}
                    {this.props.route.params.props.playlists.map(
                      element => 
                        <Element delete='true' type='playlist' paramId={element.idRep.l_id} image = {{ uri: element.foto==null ? DEFAULT_URI : element.foto }} name={element.nombre} artist={element.idRep.u} props={this.props}></Element>
                      )
                    }
                  </ScrollView>
                  </MenuTrigger>
                  <MenuOptions>
                    <ScrollView style={{ maxHeight: 200 }}>
                      <MenuOption value={"getAlbumName()"} text={"Delete"} onSelect={type => alert(`Deleted album: ${type}`)} style={{color: 'white'}}/>
                    </ScrollView>
                  </MenuOptions>
                </Menu>     
            </MenuProvider>
              
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>
              Your podcasts
            </Text>
            <View style={{height: 200, marginTop: 20}}>
            <MenuProvider>
                <Menu >
                  <MenuTrigger>
                  <ScrollView horizontal={true}>
                    {console.log("this.state.podcasts: ", this.state.user.podcasts)}
                    {this.props.route.params.props.podcasts.map(
                      element => 
                        <Element delete='true' type='podcast' paramId={element.idPodcast.l_id} image = {{ uri: element.foto==null ? DEFAULT_URI : element.foto }} name={element.nombre} artist={element.idPodcast.u} props={this.props}></Element>
                      )
                    }   
                  </ScrollView>
                  </MenuTrigger>
                  <MenuOptions>
                    <ScrollView style={{ maxHeight: 200 }}>
                      <MenuOption value={"getAlbumName()"} text={"Delete"} onSelect={type => alert(`Deleted album: ${type}`)} style={{color: 'white'}}/>
                    </ScrollView>
                  </MenuOptions>
                </Menu>     
            </MenuProvider>
              
            </View>
          </View>
            
          {/* Contenedor de info */}

          <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <View style={styles.info}>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginLeft: 5}]}>Your new name</Text>
              <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder={this.state.user.nombre}
                  placeholderTextColor="#FFFFFF"
                  // this.state.user.newUsername=text
                  onChangeText={text =>  this.state.user.newName=text}/>
              </View>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginLeft: 5}]}>Your new nickname</Text>
              <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder={this.state.user.nick}
                  placeholderTextColor="#FFFFFF"
                  // this.state.user.newUsername=text
                  onChangeText={text =>  this.state.user.newNick=text}/>
              </View>
              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginLeft: 5}]}>Your current password</Text>
              <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder="Your password"
                  placeholderTextColor="#FFFFFF"
                  // this.state.user.newUsername=text
                  onChangeText={text =>  this.state.user.pass=text}/>
              </View>

              <Text style={[styles.text, {fontSize: 20,fontWeight: '600', marginLeft: 5}]}>Your new password</Text>
              <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder="Your new password"
                  placeholderTextColor="#FFFFFF"
                  // this.state.user.newUsername=text
                  onChangeText={text =>  this.state.user.newPass=text}/>
              </View>

              <TouchableOpacity style={styles.deleteBtn} onPress={this.updateUserData}>
                <Text style={styles.loginText}>Update user data</Text>
              </TouchableOpacity>
            </View>      
          </View>

          
          {/* Contenedor de borrar cuenta */}
          <View>
            <View style={styles.inputView} >
                <TextInput  
                  secureTextEntr
                  style={styles.inputText}
                  placeholder={"Re-write your password to delete account"}
                  placeholderTextColor="#FFFFFF"
                  onChangeText={text => this.state.user.passwordCheck=text}/>
            </View>

            <TouchableOpacity style={styles.deleteBtn} onPress={this.deleteUser}>
                <Text style={styles.loginText}>Delete account</Text>
            </TouchableOpacity>
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
    },
    
    header:{
      height: 100,
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

    headerText:{
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

  });
  
  
  