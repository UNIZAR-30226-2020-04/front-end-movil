import {
  AsyncStorage,
  Platform
} from 'react-native';

class RequestService {

    /*
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
    */
    async postRequest(url,object){
      console.log(url);
      console.log("opbjecccctt:",object);
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

    async postRequestRegistro(url,object){
      let uriParts = object.foto.split('.');
      let fileType = uriParts[uriParts.length - 1];
      let formData = new FormData();

    formData.append('foto', {
      uri,
      name: `recording.${fileType}`,
      type: `image/x-${fileType}`,
    });
    formData.append('name',object.name);
		formData.append('email', object.email);
    formData.append('dateOfBirth',object.dateOfBirth);
    formData.append('surname', object.surname);
    formData.append('password', object.password);
    formData.append('username', object.username);
  
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    return fetch(url, options);
    }

    //añadir cancion
    addSongRequest = async(url,nombreC,uri,idalbum,correo) => {
      console.log("ADDSONG REQUEST id del album: ", idalbum);
      let uriParts = uri.split('.');
      let fileType = uriParts[uriParts.length - 1];
      let formData = new FormData();

    formData.append('file', {
      uri,
      name: `recording.${fileType}`,
      type: `audio/x-${fileType}`,
    });
    formData.append('idalbum',idalbum);
		formData.append('user',correo);
		formData.append('nombreC',nombreC);
  
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    return fetch(url, options);
  }
  
    /*
    This function to call rest api post methods
    ** 
    */
   uploadAudioAsync= async(apiUrl,uri)  => {
    console.log("Uploading " + uri);
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];
  
    let formData = new FormData();
    formData.append('file', {
      uri,
      name: `recording.${fileType}`,
      type: `audio/x-${fileType}`,
    });
  
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    console.log("POSTing " + uri + " to " + apiUrl);
    return fetch(apiUrl, options);
  }

  
}
  
    
export default new RequestService();