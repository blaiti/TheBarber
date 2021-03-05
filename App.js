import React from 'react';

import {YellowBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/splash';
import Home from './src/screens/home';
import Barber from './src/screens/barber';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default function App()  {
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
};



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Barber" component={Barber} />
    </Stack.Navigator>
  );
}

