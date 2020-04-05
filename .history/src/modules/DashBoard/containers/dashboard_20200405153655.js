import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity, Icon } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Card, ListItem  } from 'react-native-elements'





<View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</View>

const Tabs = createBottomTabNavigator();
const Menu = createStackNavigator();
export default class Main extends Component{
  state={
    
  }
  
    render(){
      return(

        const list = [
          {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
          },
          {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          },
        ]

        <ScrollView>
        <View style={styles.container} >
            <Card
              image={{ uri: 'https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png'}}>
              <Text style={{marginBottom: 10}}>Album1</Text>
              <Text style={{marginBottom: 10}}>Cancion</Text>
            </Card>

            <Card
              image={{ uri: 'https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png'}}>
              <Text style={{marginBottom: 10}}>Album1</Text>
              <Text style={{marginBottom: 10}}>Cancion</Text>
            </Card>
            <Card
              image={{ uri: 'https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png'}}>
              <Text style={{marginBottom: 10}}>Album1</Text>
              <Text style={{marginBottom: 10}}>Cancion</Text>
            </Card>
        </View>
        </ScrollView>
        
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000000',
      justifyContent: 'center',
    },
  });
  
  