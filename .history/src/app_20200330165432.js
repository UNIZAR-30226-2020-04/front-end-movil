import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from '-/modules/Login/containers/login'

const LoginNavigator = createStackNavigator({
  //nombre de la pantalla
  Login : {
    screen: Login //pantalla llamada
  }
});

export default createAppContainer(LoginNavigator)