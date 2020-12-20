import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { AppNavigationProp } from '../App';
import { getCoupons } from '../data/database'
import { CouponList } from '../components/CouponList';
import { Coupon } from '../data/database';
import { setupTask, startPollingLocation, stopPollingLocation } from '../utils/background';

export const HomeScreen = ({ navigation }: { navigation: AppNavigationProp }) => {
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [refresing, setRefreshing] = useState(false);

  const getData = async () => {
    setRefreshing(true);
    setCoupons(await getCoupons(5));
    setRefreshing(false);
  };

  useEffect(() => {
    getData();
    setupTask();
    startPollingLocation();
    return () => {
      stopPollingLocation();
    }
  }, [navigation]);

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
        <CouponList
          data={coupons}
          onRefresh={() => { getData() }}
          refreshing={refresing} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 5,
    height: '100%',
    width: '100%',
  },

  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  fabContainer: {
    flexDirection: 'row',
  },

  couponContainer: {
    width: '100%',
    flex: 1,
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