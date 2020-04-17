import {
  AsyncStorage,
  Platform
} from 'react-native';

class RequestService {
    //Ejecuta print USER antes que VALUE por tanto esta indefinido. Problema del async/await?

    /**
    This function is to call rest api get methods
    */
      async getRequest(url){
        let data = await fetch(url)
          .then(res => {
            return  res.json()
          })
          .catch(err => {
            console.log('Anand it is an error:', err)
          });
    
        return data;
      }
    /*
    This function to call rest api post methods
    ** 
    */
    async postRequest(url,object){
      console.log(url);
      console.log(object);
      //NO espera el return *************************
      let aux3;
      let data = await (fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
      })
      .then(
        res =>{
          let aux = res.json();
          let aux2;
          console.log("DENTRO",aux);
          return aux.then(function(value) {
            aux2 = value;
            aux3 = value;
            console.log("VALUE:",aux2);
            return aux2;
          })
        }
      )
      .catch(
        err=>{
          console.log("Error in postRequest",err);
        }
      ));
      console.log("RESULTADO:", data);
      return data;
    }


    /*
    This function to call rest api post methods
    ** 
    */
   async postRequestUploadSong(url,object){
    console.log(url);
    //console.log(object);
    //NO espera el return *************************
    let aux3;
    let body = new FormData();
    body.append('file',object);
    let data = await (fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //'Content-Type' : 'multipart/form-data'
      },
      data: object,
    })
    .then(
      res =>{
        let aux = res.json();
        let aux2;
        console.log("DENTRO",aux);
        return aux.then(function(value) {
          aux2 = value;
          aux3 = value;
          console.log("VALUE:",aux2);
          return aux2;
        })
      }
    )
    .catch(
      err=>{
        console.log("Error in postRequest",err);
      }
    ));
    //console.log("RESULTADO:", data);
    return data;
  }
}
  
    
    export default new RequestService();