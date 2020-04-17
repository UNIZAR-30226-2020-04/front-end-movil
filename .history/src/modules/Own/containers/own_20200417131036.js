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
  await NetworkService.uploadSong(result.uri)
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