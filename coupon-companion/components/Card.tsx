import React, { FC } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

export const Card: FC<{ containerStyle?: ViewStyle }> = (props) => {
  return (
    <View style={[props.containerStyle, styles.container]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})