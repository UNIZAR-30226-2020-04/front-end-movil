import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './modules/Principal/containers/principal';
import { NavigationNativeContainer } from "@react-navigation/native";


const PrincipalNavigator = createStackNavigator({
  //nombre de la pantalla
  Principal : {
    screen: Principal, //pantalla llamada
    navigationOptions:{
      title : 'EDUARDO'
    }
  }
},{headerLayoutPreset : 'center'});

export default createAppContainer(LoginNavigator)