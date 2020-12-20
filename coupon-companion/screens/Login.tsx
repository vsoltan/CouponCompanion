import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper'
import { AppNavigationProp } from '../App';
import { Card } from '../components/Card';

export const LoginScreen = ({ navigation }: { navigation: AppNavigationProp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signingUp, setSigningUp] = useState(false);

  return (
    <View style={style.container}>
      <Card>
        <Text style={style.title}>Coupon Companion</Text>
        {signingUp && <View style={{ flexDirection: 'row' }}>
          <TextInput accessibilityTraits accessibilityComponentType
            mode='outlined'
            style={style.input}
            label={'First Name'}
            value={username}
            onChangeText={(text) => setUsername(text)} />
          <TextInput accessibilityTraits accessibilityComponentType
            mode='outlined'
            style={style.input}
            label={'Last Name'}
            value={username}
            onChangeText={(text) => setUsername(text)} />
        </View>}
        <TextInput accessibilityTraits accessibilityComponentType
          mode='outlined'
          style={style.input}
          label={'Username'}
          autoCompleteType='username'
          value={username}
          onChangeText={(text) => setUsername(text)} />
        <TextInput accessibilityTraits accessibilityComponentType
          mode='outlined'
          style={style.input}
          label={'Password'}
          autoCompleteType='password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)} />
        {signingUp && <TextInput accessibilityTraits accessibilityComponentType
          mode='outlined'
          style={style.input}
          label={'Confirm Password'}
          autoCompleteType='password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)} />}
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button accessibilityTraits accessibilityComponentType
            mode='contained'
            style={style.button}
            onPress={() => { navigation.navigate('Home') }}>
            Login
        </Button>
          <Button accessibilityTraits accessibilityComponentType
            mode='contained'
            style={style.button}
            onPress={() => (signingUp ? null : setSigningUp(true))}>
            Sign Up
        </Button>
        </View>
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },

  input: {
    flexGrow: 1,
    margin: 10,
  },

  button: {
    margin: 10,
  },

  title: {
    fontSize: 32,
    padding: 5,
    alignSelf: 'center',
  }
})
