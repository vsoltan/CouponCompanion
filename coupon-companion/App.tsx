import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './components/Card';
import { CouponCard } from './components/CouponCard';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { HomeScreen } from './screens/Home';

const Stack = createStackNavigator()
export type AppNavigationProp = StackNavigationProp<{ Home: undefined, Login: undefined }>;

export default function App() {

  useEffect(() => {
    
  }, [])

  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


