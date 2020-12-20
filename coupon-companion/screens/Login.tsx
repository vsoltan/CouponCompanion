import React, { useEffect, useReducer } from 'react';
import { Button, TextInput, View } from 'react-native';

type State = {
  username: string
  password: string
  isButtonDisabled: boolean
  isError: boolean
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  isError: false,
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: "setIsError", payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload,
      }
    case 'setPassword': 
      return {
        ...state,
        password: action.payload, 
      }
    case 'setIsButtonDisabled':
        return {
          ...state,
          isButtonDisabled: action.payload
        }
    case 'setIsError':
        return {
          ...state, 
          isError: action.payload,
        }
  }
}

export const Login = () => {

  const [state, dispatch] = useReducer(reducer, initialState); 

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled', 
        payload: false 
      })
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true 
      })
    }
  }, [state.username, state.password]);

  const PLACEHOLDERisValidLogin = (username: string, password: string) => {
    console.log("")
    return username === "vsoltan" && password === "password"; 
  }

  const handleLogin = () => {
    if (PLACEHOLDERisValidLogin(state.username, state.password)) {
      
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  return (
    <View>
      <TextInput placeholder={'username'} onChange={handleUsernameChange} />
      <TextInput placeholder={'password'} onChange={handlePasswordChange}/>
      <Button title='Login' onPress={() => { console.log("we have 12 hours GIGAKEK") }} />
    </View>
  );
}