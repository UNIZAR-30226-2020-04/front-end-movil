
import React from "react";
import App2 from "./src/app";
import Player from './src/modules/DashBoard/containers/Player';
console.disableYellowBox = true;
AppRegistry.registerComponent('MusicPlayer', () => Player);

export default class App extends React.Component {
  render() {
    return <App2 />;
  }
}