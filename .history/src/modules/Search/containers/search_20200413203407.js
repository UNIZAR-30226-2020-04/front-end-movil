import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';


export default class Main extends Component{
  
  constructor () {
    super()
    this.state = {
      textSearch: "",
      selectedIndex: 2,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex: selectedIndex})
  }

  render(){
    const buttons = ['Artists', 'Albums', 'Podcast']
    const { selectedIndex } = this.state
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
            value={this.state.textSearch}
          />

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}}
            containerBorderRadius={50}
            textStyle={{color:'black'}}
            selectedButtonStyle={{backgroundColor: '#64EE85'}}
            selectedTextStyle={{color: 'white'}}
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
  
  