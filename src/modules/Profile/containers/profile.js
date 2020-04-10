import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://picsum.photos/200/300'}}/>

                <Text style={styles.name}>Eduardico </Text>
                <Text style={styles.userInfo}>eduardico@mail.com </Text>
            </View>
          </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#2D2525",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"white",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  }
});
 
  