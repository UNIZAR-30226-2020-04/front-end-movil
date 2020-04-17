import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image,} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';
//import RNFetchBlob from 'rn-fetch-blob'

export default class App extends React.Component {
    state = {
      image: null,
    };
  _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result.output);
      //Traemos el archivo dada una URL
      

      // const response = await fetch(result.uri)
      // //console.log("response:", response)
      // //const data = result.RNFetchBlob.wrap(RNFetchBlob.fs.asset(result.uri))
      // const blob2 = await response.blob();
       console.log("Blob2:",result.file)
      
      //let body = new FormData();
      //body.append('file',result);
      //console.log("Blob???:", blob)
      await NetworkService.uploadSong(result);

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
