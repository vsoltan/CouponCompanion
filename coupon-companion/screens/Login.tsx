import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper'
import { AppNavigationProp } from '../App';
import { Card } from '../components/Card';
import { login, signup } from '../data/database';

export const LoginScreen = ({ navigation }: { navigation: AppNavigationProp }) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [signingUp, setSigningUp] = useState(false);
  const [missmatch, setMissmatch] = useState(false);

  return (
    <View style={style.container}>
      <Card>
        <Text style={style.title}>Coupon Companion</Text>
        {signingUp && <View style={{ flexDirection: 'row' }}>
          <TextInput accessibilityTraits accessibilityComponentType
            mode='outlined'
            style={style.input}
            label={'First Name'}
            value={first}
            onChangeText={(text) => setFirst(text)} />
          <TextInput accessibilityTraits accessibilityComponentType
            mode='outlined'
            style={style.input}
            label={'Last Name'}
            value={last}
            onChangeText={(text) => setLast(text)} />
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
          error={missmatch}
          value={password}
          onChangeText={(text) => setPassword(text)} />
        {signingUp && <TextInput accessibilityTraits accessibilityComponentType
          mode='outlined'
          style={style.input}
          label={'Confirm Password'}
          autoCompleteType='password'
          secureTextEntry
          error={missmatch}
          value={confPassword}
          onChangeText={(text) => setConfPassword(text)} />}
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button accessibilityTraits accessibilityComponentType
            mode='contained'
            style={style.button}
            onPress={async () => {
              await login(username, password);
              navigation.navigate('Home');
            }}>
            Login
          </Button>
          <Button accessibilityTraits accessibilityComponentType
            mode='contained'
            style={style.button}
            onPress={() => {
              if (signingUp) {
                if (password === confPassword && password && confPassword) {
                  setMissmatch(false);
                  console.log('what')
                  if (signup(first, last, username, password)) {
                    navigation.navigate('Home');
                  }
                } else {
                  setMissmatch(true);
                }
              } else {
                setSigningUp(true);
              }
            }}>
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
