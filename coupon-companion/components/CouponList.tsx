import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { CouponCard } from './CouponCard';
import { Coupon } from '../data/database'

export const CouponList: FC<{ data: Coupon[], onRefresh: () => void, refreshing: boolean }> = (props) => {
  return (
    <FlatList
      style={{
        width: '100%',
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
      numColumns={2}
      data={props.data}
      refreshing={props.refreshing}
      onRefresh={props.onRefresh}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <CouponCard
            company={item.company}
            details={item.details}
            discount={'' + (item.discount * 100).toFixed(0)}
            color='#fff' />
        </View>
      )} />
  );
}