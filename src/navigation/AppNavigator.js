import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/index';
import Login from '../screens/login/index';
import Profile from '../screens/profile/index';
import Register from '../screens/register/index';
import Detail from '../screens/detail/index';
import Onboarding from '../screens/onboarding/index';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Onboarding"}>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail}  options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding}  options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}