import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "./modules/Login/containers/login";
import Principal from "./modules/Principal/containers/principal";
import Register from "./modules/Register/containers/register";
import DashBoard from "./modules/DashBoard/containers/dashboard"; //Main screen after login

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
    <MenuLoged.Navigator>
      <MenuLoged.Screen name="DashBoard" component={DashBoard} />
      <MenuLoged.Screen name="Settings" component={Main} />
    </MenuLoged.Navigator>
  );}

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
          component = { this.menuLogged}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}