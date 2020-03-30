import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './modules/Login/containers/login'


const LoginNavigator = createStackNavigator({
  //nombre de la pantalla
  Login : {
    screen: Login //pantalla llamada
  }
});

export default createAppContainer(LoginNavigator)