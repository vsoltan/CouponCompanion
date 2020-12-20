import React from 'react'; 
import { Button, TextInput, View } from 'react-native'; 

const Login = () => {
    return (
      <View>
        <TextInput placeholder={'username'}/>
        <TextInput placeholder={'username'}/>
        <Button title='name' onPress={() => {console.log("we have 12 hours GIGAKEK")}}/>
      </View>
    );
}

export default Login; 