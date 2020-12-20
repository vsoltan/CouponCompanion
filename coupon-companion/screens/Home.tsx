import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigationProp } from '../App';
import { CouponCard } from '../components/CouponCard';

export const HomeScreen = ({navigation}: { navigation: AppNavigationProp}) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CouponCard company='Radar.io' details='api calls' discount='20%' textColor='#33e' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});