import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './screens/Login';
import { HomeScreen } from './screens/Home';
import { Provider, DefaultTheme } from 'react-native-paper';
import * as Location from 'expo-location'; 

// navigation
export type AppNavigationProp = StackNavigationProp<{ Home: undefined, Login: undefined }>;
const Stack = createStackNavigator()

export default function App() {
  const [location, setLocation] = useState(null); 

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestPermissionsAsync(); 
        console.log(status); 
        if (status !== 'granted') {
          console.log("location permissions denied"); 
          return; 
          // setErrorMsg('Permission to access location was denied'); 
        }
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
        setLocation(location)
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

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
