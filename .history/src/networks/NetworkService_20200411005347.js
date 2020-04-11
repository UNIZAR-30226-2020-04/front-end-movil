import RequestService from './RequestService';

const BASE_URL = "http://localhost:8080";

class NetworkService {

  /*getUser(){
    var url = `${BASE_URL}/login/user`
    return RequestService.getRequest(url)
  }*/

  loginUser(data){
    console.log('Dataaaa:', data);
  
    var url=`/loginUser`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  registerUser(data){
    console.log('Dataaaa:', data);
  
    var url=`${BASE_URL}/registerUser`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

}

export default new NetworkService()