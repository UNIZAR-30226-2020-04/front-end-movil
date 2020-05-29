import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon, FlatList } from 'react-native';
import ViewAlbum from '../../viewAlbum'


export default class Element extends Component{
    constructor(props){
        super(props)
        
        state={
    
        }
    }
  
  goToviewAlbum(){}
    render(){
        //Al pulsar no ir a vista de album
        if(this.props.delete==='true'){
            if(this.props.type==='album'){
                return(
                    <View style={{ height:200, width:150, marginLeft: 20, 
                        borderBottomColor: 'transparent'}}
                    >
                        <View style={{ flex: 5 }}>
                            <Image source={this.props.image} 
                                style={{flex:1,width:null, height: null,
                                    resizeMode: 'cover'}}
                            />
                        </View>

                        <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                            <Text style={styles.text}>{this.props.artist}</Text>
                        </View>
                    </View>
                );
            }else if(this.props.type==='playlist'){
                return(
                    <View style={{ height:200, width:150, marginLeft: 20, 
                        borderBottomColor: 'transparent'}}
                        
                    >
                        <View style={{ flex: 5 }}>
                            <Image source={this.props.image} 
                                style={{flex:1,width:null, height: null,
                                    resizeMode: 'cover'}}
                            />
                        </View>

                        <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                            <Text style={styles.text}>{this.props.artist}</Text>
                        </View>
                    </View>
                );
            }else if(this.props.type==='podcast'){
                return(
                    <View style={{ height:200, width:150, marginLeft: 20, 
                        borderBottomColor: 'transparent'}}
                       
                    >
                        <View style={{ flex: 5 }}>
                            <Image source={this.props.image} 
                                style={{flex:1,width:null, height: null,
                                    resizeMode: 'cover'}}
                            />
                        </View>

                        <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                            <Text style={styles.text}>{this.props.artist}</Text>
                        </View>
                    </View>
                );
            }else{
                return(
                    <Text>ELSE</Text>
                );
            }

        }else{
            //ir a vista 
            if(this.props.type==='album'){
                return(
                    <View style={{ height:200, width:150, marginLeft: 20, 
                        borderBottomColor: 'transparent'}}
                        //onStartShouldSetResponder={() => {console.log("this.props************Element*******", this.props);this.props.props.navigation.navigate('viewAlbum', this.props)}}//<ViewAlbum props={this.props}></ViewAlbum>}//this.props.props.navigation.navigate("viewAlbum", this.props)}    
                    >
                        <View style={{ flex: 5 }}
                            onStartShouldSetResponder={() => {console.log("this.props************Element*******", this.props);this.props.props.navigation.navigate('viewAlbum', this.props)}}
                        >
                            <Image source={this.props.image} 
                                style={{flex:1,width:null, height: null,
                                    resizeMode: 'cover'}}
                            />
                        </View>

                        <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                            <Text style={styles.text}>{this.props.artist}</Text>
                        </View>
                    </View>
                );
            }else if(this.props.type==='playlist'){
                return(
                    <View style={{ height:200, width:150, marginLeft: 20, 
                        borderBottomColor: 'transparent'}}
                        onStartShouldSetResponder={() => this.props.props.navigation.navigate('viewPlaylist', this.props)}//<ViewAlbum props={this.props}></ViewAlbum>}//this.props.props.navigation.navigate("viewAlbum", this.props)}    
                        
                    >
                        <View style={{ flex: 5 }}>
                            <Image source={this.props.image} 
                                style={{flex:1,width:null, height: null,
                                    resizeMode: 'cover'}}
                            />
                        </View>

                        <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                            <Text style={styles.text}>{this.props.autor}</Text>
                        </View>
                    </View>
                );
            }else if(this.props.type==='podcast'){
                return(
                    <View style={{ height:200, width:150, marginLeft: 20, 
                        borderBottomColor: 'transparent'}}
                        onStartShouldSetResponder={() => this.props.props.navigation.navigate('viewPodcast', this.props)}//<ViewAlbum props={this.props}></ViewAlbum>}//this.props.props.navigation.navigate("viewAlbum", this.props)}    
                        
                    >
                        <View style={{ flex: 5 }}>
                            <Image source={this.props.image} 
                                style={{flex:1,width:null, height: null,
                                    resizeMode: 'cover'}}
                            />
                        </View>

                        <View style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
                            <Text style={styles.text}>{this.props.name}</Text>
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
  }


  const styles = StyleSheet.create({
    text:{
        color:'white',
        paddingHorizontal: 20
      }
  });
  
  