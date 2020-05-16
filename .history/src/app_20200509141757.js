import React from "react";
import { Alert, StyleSheet, Text, View, Button, ToastAndroid } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

import Login from "./modules/Login/containers/login";
import Principal from "./modules/Principal/containers/principal";
import Register from "./modules/Register/containers/register";
import RecoverPassword from "./modules/RecoverPassword/containers/recoverPassword";

import DashBoard from "./modules/DashBoard/containers/dashboard"; //Main screen after login
import Search from "./modules/Search/containers/search";
import Library from "./modules/Library/containers/library";

import Own from "./modules/Own/containers/own";
import MusicPlayer from "./modules/MusicPlayer/miniMusicPlayer";

import Profile from "./modules/Profile/containers/profile";
import SettingsProfile from "./modules/Profile/containers/settingsProfile.js";

import addAlbum from "./modules/Own/containers/addAlbum";
import addPodcast from "./modules/Own/containers/addPodcast";
import addPlaylist from "./modules/Own/containers/addPlaylist";


//ToastAndroid.show('Button pressed', ToastAndroid.SHORT)



const Stack = createStackNavigator();

const MenuLoged = createBottomTabNavigator();

//Pilas de pantallas de cada seccion
const DashboardStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OwnStack = createStackNavigator();

  //Funcion que contiene la pila del menu DashBoard (DashBoardStackSceren)
  function DashboardStackScreen() {
    return (
      <DashboardStack.Navigator screenOptions = {{
        headerTransparent: true,
        headerTintColor:'white',
        headerTitleStyle:{
          fontSize: 24,
          fontWeight: '600',
          paddingHorizontal: 20
        },
      }}>
        <DashboardStack.Screen name="Dashboard" component={DashBoard} />
        <DashboardStack.Screen name="MusicPlayer" component={MusicPlayer} />
      </DashboardStack.Navigator>
    );
  }

  //Funcion que contiene la pila del menu DashBoard (DashBoardStackSceren)
  function SearchStackScreen() {
    return (
      <SearchStack.Navigator screenOptions = {{
        headerTransparent: true,
        headerTintColor:'white',
        headerTitleStyle:{
          fontSize: 24,
          fontWeight: '600',
          paddingHorizontal: 20
        },
      }}>
        <SearchStack.Screen name="Search" component={Search} />
      </SearchStack.Navigator>
    );
  }

  function LibraryStackScreen() {
    return (
      <LibraryStack.Navigator screenOptions = {{
        headerTransparent: true,
        headerTintColor:'white',
        headerTitleStyle:{
          fontSize: 24,
          fontWeight: '600',
          paddingHorizontal: 20
        },
      }}>
        <LibraryStack.Screen name="Library" component={Library} /> 
      </LibraryStack.Navigator>
    );
  }
  // options={({ route }) => ({ title: route.params.name })}

  function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator screenOptions = {{
        headerTransparent: true,
        headerTintColor:'white',
        headerTitleStyle:{
          fontSize: 24,
          fontWeight: '600',
          paddingHorizontal: 20
        },

        headerRight: ({ navigation, screenProps }) => (
          <Button title="SETTINGS" ></Button>
          //<Ionicons name='settings-outline' onPress={Alert.alert("HOLA")}></Ionicons>
        ),
      }}
      >
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="Settings" component={SettingsProfile} />
        <ProfileStack.Screen name="viewAlbum" component={viewAlbum} />
      </ProfileStack.Navigator>
    );
  }

  function OwnStackScreen() {
    return (
      <OwnStack.Navigator screenOptions = {{
         
        headerTransparent: true,
        headerTintColor:'white',
        headerTitleStyle:{
          fontSize: 24,
          fontWeight: '600',
          paddingHorizontal: 20
        },
      }}>
        <OwnStack.Screen name="Own" component={Own} />
        <OwnStack.Screen name="addAlbum" component={addAlbum} />
        <OwnStack.Screen name="addPodcast" component={addPodcast} />
        <OwnStack.Screen name="addPlaylist" component={addPlaylist} />
      </OwnStack.Navigator>
    );
  }


  //Funcion encargada de cambiar entre las diferentes secciones (estamos Logeados)
function menuLogged(){
  return (
    <MenuLoged.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          //Si estoy en dashboard muestra este icono
          if (route.name === 'Dashboard') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Search') {
            //Si estoy en setting muestro este icono
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if (route.name === 'Library') {
            //Si estoy en setting muestro este icono
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if (route.name === 'Profile') {
            //Si estoy en setting muestro este icono
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if (route.name === 'Own') {
            //Si estoy en setting muestro este icono
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#64EE85',
        inactiveTintColor: 'gray',
      
      }}
    >
      {/* Diferentes pilas de pantallas */}
      <MenuLoged.Screen name="Dashboard" component={DashboardStackScreen} />
      <MenuLoged.Screen name="Search" component={SearchStackScreen} />
      <MenuLoged.Screen name="Library" component={LibraryStackScreen} />
      <MenuLoged.Screen name="Profile" component={ProfileStackScreen} />
      <MenuLoged.Screen name="Own" component={OwnStackScreen} />
    </MenuLoged.Navigator>
  );
}

 export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          //headerShown: false
            headerTransparent: true,
            headerTintColor:'white',
            headerTitleStyle:{
              fontSize: 24,
              fontWeight: '600',
              paddingHorizontal: 20
            },
        }}>
        <Stack.Screen
          options={{ headerShown: false}}
          name="Home"
          component={Principal}
        />

        <Stack.Screen 
          name="Login" 
          component={Login}
          
        />

        <Stack.Screen 
          name = "Register" 
          component = {Register}
        />

        <Stack.Screen 
          name = "MainLogged" 
          component = { menuLogged}
          options = {{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name = "RecoverPassword" 
          options={{
            title: "Recover password"
          }}
          component = { RecoverPassword }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}