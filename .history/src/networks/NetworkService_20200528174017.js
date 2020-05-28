import RequestService from './RequestService';
import {
  AsyncStorage,
  Platform
} from 'react-native';

//const BASE_URL = "http://localhost:8080";
const BASE_URL = "http://pruebaslistenit.herokuapp.com/";
//adb reverse tcp:8080 tcp:8080
class NetworkService {

  async loginUser(data){
    console.log('Dataaaa:', data);
    var url=`${BASE_URL}/loginUser`
    console.log('URLLLLLL', url);
    //Async devulve un objeto promise hay q convertirlo
    return await RequestService.postRequest(url,data);
  }

  fetchAlbums(data){
    console.log('Fetch albums');
    var url=`${BASE_URL}/getAlbumsByUser`
    console.log('EMAIL', data);
    console.log('URLLLLLL', url);
    console.log("data.correo ", data.correo)
    data.user = data.correo;
    return RequestService.postRequest(url,data.user);
  }

  pedirURL(idCancion,idAlbum,correo){
    console.log('Pedir URL cancion');
    // var url=`${BASE_URL}/URLCancion`
    // upload={}
    // upload.idalbum = idAlbum
    // upload.user = correo
    // upload.idcancion = idCancion
    // console.log('UPLOAD', upload);
    //return RequestService.postRequestURL(url,upload);
    return BASE_URL + "Cancion?idsong=" + idCancion + idAlbum + correo + ".mp3"
  }

  fetchPlaylists(data){
    console.log('Fetch palylists');
    var url=`${BASE_URL}/getPlaylistByUser`
    console.log('EMAIL', data);
    console.log('URLLLLLL', url);
    console.log("data.correo ", data.correo)
    data.user = data.correo;
    return RequestService.postRequest(url,data.user);
  }

  fetchPodcasts(data){
    console.log('Fetch podcasts');
    var url=`${BASE_URL}/getPodcastsByUser`
    console.log('EMAIL', data);
    console.log('URLLLLLL', url);
    console.log("data.correo ", data.correo)
    data.user = data.correo;
    return RequestService.postRequest(url,data.user);
  }

  listSongsAlbum(data){
    console.log('Fetch songs album');
    var url=`${BASE_URL}/listSongsAlbum`
    console.log('AlbumID', data.idalbum);
    console.log('User', data.user);
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  listSongsPlaylist(data){
    console.log('Fetch songs playlist');
    var url=`${BASE_URL}/listSongsPlaylist`
    console.log('PlaylistID', data.idplaylist);
    console.log('User', data.user);
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  listSongsPodcast(data){
    console.log('Fetch songs podcast');
    var url=`${BASE_URL}/listPodcast`
    //console.log('PodcastID', data.idpodcast);
    //console.log('User', data.user);
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  registerUser(data){
    console.log('Dataaaa:', data);
    var url=`${BASE_URL}/registerUser1`
    console.log('URLLLLLL', url);
    //return RequestService.postRequestRegistro(url,data);
    return RequestService.postRequestRegister1(url,data);
  }

  
  uploadSong(uri){
    //console.log('Dataaaa:', data);
    var url=`${BASE_URL}/uploadSong`
    console.log('URLLLLLL', url);
    return RequestService.uploadAudioAsync(url,uri);
  }
  

  //Funciona
  deleteUser(data){
    console.log('Delete User');
    var url=`${BASE_URL}/deleteUser`
    update={}
    update.user = data.correo
    update.pass = data.pass
    update.passCheck = data.passwordCheck

    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,update);
  }


  updateUserName(data){
    console.log('Update User NAme');
    var url=`${BASE_URL}/cambiarNombre`
    update={}
    update.user = data.correo
    update.nick = data.nombre
    update.newName = data.newName
    console.log('URLLLLLL', url);
    console.log('UPDATE: ', update);
    return RequestService.postRequest(url,update);
  }

  //Funciona
  updateUserNick(data){
    console.log('Update User Nick');
    var url=`${BASE_URL}/cambiarNick`
    update={}
    update.user = data.correo
    update.nick = data.nick
    update.newNick = data.newNick
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,update);
  }

  updateUserPass(data){
    console.log('Update User Pass');
    var url=`${BASE_URL}/cambiarPass`
    console.log('URLLLLLL', url);
    update={}
    update.user = data.correo
    update.pass = data.pass
    update.newPass = data.newPass
    
    return RequestService.postRequest(url,update);
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
    let formData = new FormData();
    formData.append('email', data.user.correo);
    formData.append('name',data.nombreAlbum);
    console.log("CORREO", data.correo)
    return RequestService.postRequestFormData(url,formData);
  }

  deleteAlbum(correo,idalbum){
    console.log('Servicio borrar Album');
    var url=`${BASE_URL}/deleteAlbum`
    console.log('URLLLLLL', url);
    data={}
    data.user = correo
    data.idalbum = idalbum
    console.log("CORREO", data)
    return RequestService.postRequest(url,data);
  }

  deletePlaylist(correo,idplaylist){
    console.log('Servicio borrar playlist');
    var url=`${BASE_URL}/deletePlaylist`
    console.log('URLLLLLL', url);
    data={}
    data.user = correo
    data.idplaylist = idplaylist
    console.log("CORREO", data)
    return RequestService.postRequest(url,data);
  }

  deletePodcast(correo,idpodcast){
    console.log('Servicio borrar podcast');
    var url=`${BASE_URL}/deletePodcast`
    console.log('URLLLLLL', url);
    data={}
    data.user = correo
    data.idpodcast = idpodcast
    console.log("CORREO", data)
    return RequestService.postRequest(url,data);
  }

  addCancionAlbum(nombreC,uri,idalbum,correo){
    //console.log('Servicio Subir Cancion Album', data);
    var url=`${BASE_URL}/subirCancion`
    return RequestService.addSongRequest(url,nombreC,uri,idalbum,correo);
  }

  recoverPassword(data){
    console.log('Dataaaa:', data);
    var url=`${BASE_URL}/recoverEmail`
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
  }

  addCapituloPodcast(nombreC,uri,idalbum,correo){
    console.log('Servicio Subir cancion Podcast', {url,nombreC,uri,idalbum,correo});
    var url=`${BASE_URL}/subirCapitulo`
    return RequestService.addSongRequest(url,nombreC,uri,idalbum,correo);
  }

  createPodcast(data){
    console.log('Servicio Crear Podcast', data);
    var url=`${BASE_URL}/createPodcast`
    console.log('URLLLLLL', url);
    let formData = new FormData();
    formData.append('email', data.user.correo);
    formData.append('podcast',data.nombrePodcast);
    return RequestService.postRequestFormData(url,formData);
  }

  //Crea la palylist
  createPlaylist(data){
    console.log('Servicio Crear Playlist', data);
    var url=`${BASE_URL}/createPlaylist`
    console.log('URLLLLLL', url);
    let formData = new FormData();
    formData.append('email', data.user.correo);
    formData.append('playlist',data.nombrePlaylist);
    return RequestService.postRequestFormData(url,formData);
  }

  //añade cancion to playlist
  addToPlaylist(data){
    console.log('Servicio addToPlaylist', data);
    var url=`${BASE_URL}/addToPlaylist`
    console.log('URLLLLLL', url);

    //Parametros para llamar a addToPlaylit
    data.user = data.user.correo
    data.nombre = data.nombrePlaylist
    data.usercancion = data.addCancionPlaylist
    console.log("CORREO", data.user)
    console.log("nombre", data.nombre)
    console.log("usercancion", data.usercancion)
    return RequestService.postRequest(url,data);
  }

  //idalbum,user,idcancion
  getURLsong(data){
    console.log('Get URL Cancion');
    var url=`${BASE_URL}/URLCancion`
    console.log('URLLLLLL', url);
    //data.idalbum = data.
    return RequestService.postRequest(url,data);
  }

  searchArtistas(data){
    console.log('Buscando....',data);
    var url=`${BASE_URL}/searchUser`
    return RequestService.postRequest(url,data);
  }

  searchAlbums(data){
    console.log('Buscando....',data);
    var url=`${BASE_URL}/searchAlbum`
    return RequestService.postRequest(url,data);
  }
  searchPlaylist(data){
    console.log('Buscando....',data);
    var url=`${BASE_URL}/searchPlaylist`
    return RequestService.postRequest(url,data);
  }

  searchPlaylist(data){
    console.log('Buscando....',data);
    var url=`${BASE_URL}/searchPlaylist`
    return RequestService.postRequest(url,data);
  }

  searchPodcast(data){
    console.log('Buscando....',data);
    var url=`${BASE_URL}/searchPodcast`
    return RequestService.postRequest(url,data);
  }


}

export default new NetworkService()