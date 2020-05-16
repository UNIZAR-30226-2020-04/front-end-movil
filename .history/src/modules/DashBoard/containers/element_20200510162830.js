import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon, FlatList } from 'react-native';
import viewAlbum from '../../viewAlbum'


export default class Element extends Component{
    constructor(props){
        super(props)
        
        state={
    
        }
    }
  
  goToviewAlbum(){}
    render(){
        if(this.props.type==='album'){
            return(
                <View style={{ height:200, width:150, marginLeft: 20, 
                    borderBottomColor: 'transparent' }}
                    onStartShouldSetResponder={() => this.props.pantalla.navigation.navigate("viewAlbum", this.props)}    
                    
                >
                    <View style={{ flex: 5 }}>
                        <Image source={this.props.image} 
                            style={{flex:1,width:null, height: null,
                                resizeMode: 'cover'}}
                        />
                    </View>

                    <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={styles.text}>{this.props.album_name}</Text>
                        <Text style={styles.text}>{this.props.artist}</Text>
                    </View>
                </View>
            );
        }else{
            return(
                <Text>ELSE</Text>
            );
        }
    }
  }


  const styles = StyleSheet.create({
    text:{
        color:'white',
        paddingHorizontal: 20
      }
  });
  
  