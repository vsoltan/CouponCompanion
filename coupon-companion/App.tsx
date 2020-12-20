import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './components/Card';
import { CouponCard } from './components/CouponCard';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens/Login';
import { HomeScreen } from './screens/Home';
import { Provider, DefaultTheme } from 'react-native-paper';

const Stack = createStackNavigator()
export type AppNavigationProp = StackNavigationProp<{ Home: undefined, Login: undefined }>;

export default function App() {

  useEffect(() => {

  }, [])

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <StatusBar style='auto' />
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5478a3',
    accent: '#f69',
    background: '#fff',
    surface: '#fff',
  }
}
