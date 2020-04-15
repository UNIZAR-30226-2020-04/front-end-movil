import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';
import NetworkService from '../../../networks/NetworkService'
import * as DocumentPicker from 'expo-document-picker';

export default class App extends React.Component {
    state = {
      image: null,
    };
  _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);
      await NetworkService.postRequestUploadSong(result.uri);

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
