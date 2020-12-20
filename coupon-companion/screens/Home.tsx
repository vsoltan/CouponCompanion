import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { AppNavigationProp } from '../App';
import { CouponCard } from '../components/CouponCard';
import { CouponList } from '../components/CouponList';
import { Coupon } from '../data/database';


const dummyData: Coupon[] = [
  {
    id: '0',
    company: 'radar.io',
    details: 'api calls',
    discount: 20 ,
  },
  {
    id: '1',
    company: 'radar.io',
    details: 'api calls',
    discount: 21 ,
  },
  {
    id: '2',
    company: 'radar.io',
    details: 'api calls',
    discount: 22 ,
  },
  {
    id: '3',
    company: 'radar.io',
    details: 'api calls',
    discount: 23 ,
  },
  {
    id: '4',
    company: 'radar.io',
    details: 'api calls',
    discount: 24 ,
  },
  {
    id: '5',
    company: 'radar.io',
    details: 'api calls',
    discount: 20 ,
  },
  {
    id: '6',
    company: 'radar.io',
    details: 'api calls',
    discount: 21 ,
  },
  {
    id: '7',
    company: 'radar.io',
    details: 'api calls',
    discount: 22 ,
  },
  {
    id: '8',
    company: 'radar.io',
    details: 'api calls',
    discount: 23 ,
  },
  {
    id: '9',
    company: 'radar.io',
    details: 'api calls',
    discount: 24 ,
  },
  {
    id: '10',
    company: 'radar.io',
    details: 'api calls',
    discount: 20 ,
  },
  {
    id: '11',
    company: 'radar.io',
    details: 'api calls',
    discount: 21 ,
  },
  {
    id: '12',
    company: 'radar.io',
    details: 'api calls',
    discount: 22 ,
  },
  {
    id: '13',
    company: 'radar.io',
    details: 'api calls',
    discount: 23 ,
  },
  {
    id: '14',
    company: 'radar.io',
    details: 'api calls',
    discount: 24 ,
  },
]

export const HomeScreen = ({ navigation }: { navigation: AppNavigationProp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Welcome, User!</Text>
        <View style={styles.fabContainer}>
          <FAB accessibilityComponentType accessibilityTraits
            icon='tag'
            style={styles.fab}
            onPress={() => { }} />
          <FAB accessibilityComponentType accessibilityTraits
            icon='account'
            style={styles.fab}
            onPress={() => { }} />
        </View>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Deals in Your Area:</Text>
      </View>
      <View style={styles.couponContainer}>
        <CouponList data={dummyData} />
      </View>
      {/* <CouponCard company='Radar.io' details='api calls' discount='20%' textColor='#59f' color='#aef' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },

  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  fabContainer: {
    flexDirection: 'row',
  },

  couponContainer: {
    width: '100%',
    alignItems: 'center',
  },

  fab: {
    margin: 5,
  },

  title: {
    alignSelf: 'center',
    fontSize: 30,
  }
});