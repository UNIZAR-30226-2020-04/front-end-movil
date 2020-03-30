// import React from 'react';
// import { StyleSheet, Text, View, AcivityIndicator } from 'react-native';
// import * as Font from 'expo';
// import App2 from './src/app'
// import { Root } from "native-base";
// import {AppLoading } from "expo";



// export default class App extends React.Component {
// constructor (props) {
//   super (props)
//   this.state = {
//     fontLoaded: false,
//     saludo: "Hola"
//   };
// }
// async componentDidMount() {
//   await Font.loadAsync ({
//   'Roboto': require ('./Roboto.ttf'),
//   'Roboto_medium': require ('./Roboto_medium.ttf')
//   });
//   this.setState({fontLoaded: true});
// }

  
//   render () {
//     //if(this.state.fontLoaded){
//       return (
//           <View>
//             {/* <Text>{this.state.fontLoaded} Saludo: {this.state.saludo}</Text> */}
//             {/* <App2/> */}
//           </View>
//       );
//   }
// }
import React from "react";
import Setup from "./src/boot/setup";

export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}