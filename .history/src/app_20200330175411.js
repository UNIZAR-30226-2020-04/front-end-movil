import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './modules/Principal/containers/principal';
import { NavigationNativeContainer } from "@react-navigation/native";

const PrincipalNavigator = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="EDUARDO"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  })
}

