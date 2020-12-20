import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { CouponCard } from './CouponCard';
import { Coupon } from '../data/database'

// TODO: set up FlatList with database code
export const CouponList: FC<{ data: Coupon[] }> = (props) => {
  return (
    <FlatList
      style={{
        width: '100%',
      }}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
      data={props.data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View>
          <CouponCard
            company={item.company}
            details={item.details}
            discount={'' + item.discount} 
            color='#e3e3e3' />
        </View>
      )}
    />
  );
}