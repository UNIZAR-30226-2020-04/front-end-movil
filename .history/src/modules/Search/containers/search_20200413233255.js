import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements';


export default class Main extends Component{
  
  constructor () {
    super()
    this.state = {
      textSearch: "",
      selectedIndex: 2,
      nResults: 0
    }

    this.arrayData=[]
    this.updateIndex = this.updateIndex.bind(this)
  }

  //Al montar el componente hacer consulta??
  // componentDidMount() {
  //   return fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: responseJson,
  //         },
  //         function() {
  //           this.arrayholder = responseJson;
  //         }
  //       );
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  // SearchFilterFunction(text) {
  //   //passing the inserted text in textinput
  //   const newData = this.arrayholder.filter(function(item) {
  //     //applying filter for the inserted text in search bar
  //     const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });

  //   this.setState({
  //     //setting the filtered newData on datasource
  //     //After setting the data it will automatically re-render the view
  //     dataSource: newData,
  //     search: text,
  //   });
  // }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex: selectedIndex})
  }

  render(){
    const buttons = ['Artists', 'Albums', 'Podcast']
    const { selectedIndex } = this.state
    return(
      <View style={styles.container}>
        
          <ImageBackground source={require('../../../Wallpapers/fondo.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.screen}>
              <SearchBar
                round
                searchIcon={{ size: 24 }}
                containerStyle={{backgroundColor: '#000', marginTop: 70}}
                inputContainerStyle={{backgroundColor: '#fff'}}
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
                containerStyle={{height: 50, marginTop: 20}}
                containerBorderRadius={50}
                textStyle={{color:'black'}}
                selectedButtonStyle={{backgroundColor: '#64EE85'}}
                selectedTextStyle={{color: 'white'}}
              />

              <Text style={[styles.title,{marginTop: 10}]}>
                Results {this.state.nResults} 
              </Text>
            </ScrollView>  
          </ImageBackground>
        
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
      flex:1,
      marginTop: 0,   
      resizeMode: "cover", 
    },

    title:{
      color:'white',//'#64EE85',
      fontSize: 24,
      fontWeight: '600',
      paddingHorizontal: 20
    },

    backgroundImage:{ 
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      resizeMode: "contain"},

  });
  
  