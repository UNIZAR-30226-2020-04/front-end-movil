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

  fetchAlbums(data){
    console.log('Fetch albums');
    var url=`${BASE_URL}/getAlbumsByUser`
    console.log('EMAIL', data);
    console.log('URLLLLLL', url);
    console.log("data.correo ", data.correo)
    data.user = data.correo;
    return RequestService.postRequest(url,data.user);
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
    console.log('PodcastID', data.idpodcast);
    console.log('User', data.user);
    console.log('URLLLLLL', url);
    return RequestService.postRequest(url,data);
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
    data.user = data.correo
    data.name = data.name
    data.newName = data.newName
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

    data.email = data.user.correo
    data.name = data.nombreAlbum
    console.log("CORREO", data.correo)
    return RequestService.postRequest(url,data);
  }

  addCancionAlbum(nombreC,uri,idalbum,correo){
    //console.log('Servicio Subir Cancion Album', data);
    var url=`${BASE_URL}/subirCancion`
    return RequestService.addSongRequest(url,nombreC,uri,idalbum,correo);
  }

  addCapituloPodcast(nombreC,uri,idalbum,correo){
    //console.log('Servicio Subir Cancion Album', data);
    //var url=`${BASE_URL}/subirCancion`
    //return RequestService.addSongRequest(url,nombreC,uri,idalbum,correo);
  }

  createPodcast(data){
    console.log('Servicio Crear Album', data);
    var url=`${BASE_URL}/createAlbum`
    console.log('URLLLLLL', url);

    data.user = data.user.correo
    data.nombre = data.nombrePodcast
    console.log("CORREO", data.correo)
    return RequestService.postRequest(url,data);
  }

  //Crea la palylist
  createPlaylist(data){
    console.log('Servicio Crear Playlist', data);
    var url=`${BASE_URL}/createPlaylist`
    console.log('URLLLLLL', url);

    data.user = data.user.correo
    data.playlist = data.nombrePlaylist
    console.log("CORREO", data.correo)
    return RequestService.postRequest(url,data);
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
}

export default new NetworkService()