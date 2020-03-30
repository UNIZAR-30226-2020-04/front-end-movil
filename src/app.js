import React, { Component } from 'react';
import { Avatar } from "react-native-elements";
export default class App2 extends Component {
  render() {
    
    return (
      <Avatar
        size="large"
        title="LW"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
    );
  }
}