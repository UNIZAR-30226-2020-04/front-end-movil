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
      let data=await (fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
      })
      .then(
        res=>{
          let aux = res.json();
          let aux2;
          console.log("DENTRO",aux);
          aux.then(function(value) {
            aux2 = value;
            console.log("VALUE:",aux2);
            
            return new Promise((aux2) => aux2);
          })
          .catch(
            res =>{
              return new Promise((aux2) => aux2);
            }
          );
          //Devulve:
          // VALUE: Object {
          //   "correo": "e@e.com",
          //   "fNacimiento": "Zjzk",
          //   "foto": null,
          //   "nick": "Ediaz",
          //   "nombre": "Edu",
          //   "pass": "1",
          // }
          //return aux2;
        }
      )
      .catch(
        err=>{
          console.log("Error in postRequest",err);
        }
      ));
      
      return data;
    }

    
    
    
    }
    
    export default new RequestService();