import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default class Main extends Component{
  state={
    textSearch: ""
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.screen}>
          <Text style={[styles.title,{marginTop: 70}]}>
            Titulo 
          </Text>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            // onChangeText={text => this.SearchFilterFunction(text)}
            // onClear={text => this.SearchFilterFunction('')}
            onChangeText={text => this.setState({textSearch: text})}
            // onClear={text => this.SearchFilterFunction('')}
            placeholder="Type Here..."
            value={this.state.search}
          />

        
        </ScrollView>
      </View>
    
    );
  }
}


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000',
      paddingTop: 20,
    },

    screen: {
      marginTop: 0,
      backgroundColor: '#000',   
      resizeMode: "cover", 
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

  });
  
  