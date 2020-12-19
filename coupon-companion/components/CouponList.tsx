import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { CouponCard } from './CouponCard';

// TODO: set up FlatList with database code
export const CouponList: FC<{}> = (props) => {
  return (
    <FlatList 
      data={[]}
      numColumns={2}
      renderItem={({item, index}) => (
        <CouponCard company='' details='' discount=''/>
      )}
    />
  );
}