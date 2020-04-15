import RequestService from './RequestService';
import {
  AsyncStorage,
  Platform
} from 'react-native';

const BASE_URL = "http://localhost:8080";
//adb reverse tcp:8080 tcp:8080
class NetworkService {

  /*getUser(){
    var url = `${BASE_URL}/login/user`
    return RequestService.getRequest(url)
  }*/

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

  registerUser(data){
    console.log('Dataaaa:', data);
    var url=`${BASE_URL}/uploadSong`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

}

export default new NetworkService()