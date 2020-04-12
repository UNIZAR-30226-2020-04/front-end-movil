import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

//Componente para almacenar informacion del usuario en el state
export default class User extends Component{

    constructor(props) {
        super(props);
    }

    state={
      correo: "correo"
    }
  }