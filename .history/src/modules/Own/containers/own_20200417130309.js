import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image,} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';
//import RNFetchBlob from 'rn-fetch-blob'

export default class App extends React.Component {
    state = {
      image: null,
    };


uploadAudioAsync= async(uri)  => {
  console.log("Uploading " + uri);
  let apiUrl = 'http://localhost:8080/uploadSong';
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


_pickDocument = async () => {
  let result = await DocumentPicker.getDocumentAsync({});
  await this.uploadAudioAsync(result.uri);
  

  ///Eduuuuu faltaria enviar el result a la base de datos con lode fetch 
  //nose muy bien si haria falta tocar algo del formato o con lo que se coge valdria.
}
    


  render() {
         let { image } = this.state;
    return (
      <View style={styles.container}>
        <Button
          title="Selecciona documento"
          onPress={this._pickDocument}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});