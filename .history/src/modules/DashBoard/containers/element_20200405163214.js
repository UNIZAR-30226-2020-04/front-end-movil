import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon, FlatList } from 'react-native';


export default class Element extends Component{
  state={
    
  }
  
    render(){
      return(
        <View style={{ height:160, width:160, marginLeft: 20, borderWidth: 0.5, 
            borderBottomColor: '#000000' }}>
            <View style={{ flex: 1 }}>
            <Image source={this.props.image} 
                style={{flex:1, width:130, height: null,
                    resizeMode: 'cover'}}
            />
            </View>

            <View style={{ flex:1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
            <Text>{this.props.album_name}</Text>
            <Text>{this.props.song_name}</Text>
            </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    
  });
  
  