import RequestService from './RequestService';
import {
  AsyncStorage,
  Platform
} from 'react-native';

const BASE_URL = "http://localhost:8080";
//adb reverse tcp:8080 tcp:8080
class NetworkService {

  async loginUser(data){
    console.log('Dataaaa:', data);
    var url=`${BASE_URL}/loginUser`
    console.log('URLLLLLL', url);
    //Async devulve un objeto promise hay q convertirlo
    return await RequestService.postRequest(url,data);
  }

  registerUser(data){
    console.log('Dataaaa:', data);
    var url=`${BASE_URL}/registerUser`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  uploadSong(uri){
    //console.log('Dataaaa:', data);
    var url=`${BASE_URL}/uploadSong`
    console.log('URLLLLLL', url);
    return RequestService.uploadAudioAsync(url,uri);
  }
  
  deleteUser(data){
    console.log('Delete User');
    var url=`${BASE_URL}/deleteUser`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }


  updateUserName(data){
    console.log('Update User NAme');
    var url=`${BASE_URL}/cambiarNombre`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  updateUserNick(data){
    console.log('Update User Nick');
    var url=`${BASE_URL}/cambiarNick`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  updateUserPass(data){
    console.log('Update User Pass');
    var url=`${BASE_URL}/cambiarPass`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  // updateUserData(data){
  //   console.log('Update User data', data);
  //   return this.updateUserName(data) && this.updateUserNick(data) && this.updateUserPass(data) //&& RequestService.updateUserNick(data) 
  //     //&& RequestService.updateUserPass(data)
  // }
  createAlbum(data){
    console.log('Servicio Crear Album', data);
    var url=`${BASE_URL}/createAlbum`
    console.log('URLLLLLL', url);

    data.correo = data.user.correo
    data.nombre = data.nombreAlbum
    console.log("CORREO", data.correo)
    return RequestService.postRequest(url,data);
  }

  addCancionAlbum(nombreC,uri,idalbum,correo){
    //console.log('Servicio Subir Cancion Album', data);
    var url=`${BASE_URL}/subirCancion`
    return RequestService.addSongRequest(url,nombreC,uri,idalbum,correo);
  }

  //idalbum,user,idcancion
  getURLsong(data){
    console.log('Get URL Cancion');
    var url=`${BASE_URL}/URLCancion`
    console.log('URLLLLLL', url);
    data.idalbum = data.
    return RequestService.postRequest(url,data);
  }
}

export default new NetworkService()