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

  updateUserData(data){
    console.log('Delete User');
    var url1=`${BASE_URL}/cambiarNombre`
    var url2=`${BASE_URL}/cambiarNick`
    var url3=`${BASE_URL}/cambiarPass`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url1,url2,url3,data);
  }

}

export default new NetworkService()