import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class Main extends Component{
  state={
    
  }
  
    render(){
      return(
        <NavigationContainer>
          <Tabs.Navigator>
            <Stack.Screen
              options={{ title: "Main" }}
              name="Main"
              component={Main}
              
            />
            <Tabs.Screen  
              options={{ title: "Buscar" }}
              name="Buscar" 
              component={Main}
              options={{
                headerMode: 'none',
                headerTransparent: false,
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      );
    }
  }


  const styles = StyleSheet.create({
  

  });
  
  