import React, { Component } from 'react';
import { Avatar } from "react-native-elements";
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground } from 'react-native';
import { Button2 } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component{
    register = () => {Alert.alert('yendo a registro')}
    render(){
      return (
        
        <View style={styles.container}>
            <Text>Login</Text>
          </View>
      );
    }
  }