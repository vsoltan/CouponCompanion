import React, { FC } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

export const Card: FC<{ containerStyle?: ViewStyle }> = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    // borderColor: '#000',
    // borderWidth: 1,
    padding: 10,
    margin: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    elevation: 0,
  }
})