import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default class App extends Component{
  state={
    
  }
  
    render(){
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
    }
  }


  const styles = StyleSheet.create({
  

  });
  
  