import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "./modules/Login/containers/login";
import Principal from "./modules/Principal/containers/principal";
import Register from "./modules/Register/containers/register";
import DashBoard from "./modules/DashBoard/containers/dashboard"; //Main screen after login
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const MenuLoged = createBottomTabNavigator();


//  function Menu(){
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Main" component={Main} />
//       <Tab.Screen name="Settings" component={Main} />
//     </Tab.Navigator>
//   );
// }
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
      <MenuLoged.Screen name="Search" component={DashBoard} />
      <MenuLoged.Screen name="Library" component={DashBoard} />
      <MenuLoged.Screen name="Profile" component={DashBoard} />
      <MenuLoged.Screen name="Own" component={DashBoard} />
    </MenuLoged.Navigator>
  );}


  //Funcion que contiene la pila del menu DashBoard (DashBoardStackSceren)
  function DashboardStackScreen() {
    return (
      <HomeStack.Navigator>
        <MenuLoged.Screen name="Dashboard" component={DashBoard} />
      </HomeStack.Navigator>
    );
  }


 export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Titulo igual lo quito luego" }}
          name="Home"
          component={Principal}
        />

        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerMode: 'none',
            headerTransparent: false,
          }}
        />

        <Stack.Screen 
          name = "Register" 
          component = {Register}
        />

        <Stack.Screen 
          name = "MainLogged" 
          component = { menuLogged}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}