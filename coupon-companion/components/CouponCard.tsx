import React, { FC } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { Card } from './Card';

export const CouponCard: FC<{ company: string, details: string, discount: string, color?: string, textColor?: string }> = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 2 / 5,
      height: Dimensions.get('window').width * 2 / 5,
      backgroundColor: props.color,
    },
  
    company: {
      fontSize: 24,
      color: props.textColor,
    },
  
    details: {
      fontSize: 18,
      color: props.textColor,
    },
  
    discount: {
      fontSize: 50,
      color: props.textColor,
      position: 'absolute',
      bottom: 0,
      right: 10,
    }
  })
  
  return (
    <Card containerStyle={styles.container}>
      <Text style={styles.company}>{props.company}</Text>
      <Text style={styles.details}>{props.details}</Text>
      <Text style={styles.discount}>{props.discount}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 2 / 5,
    height: Dimensions.get('window').width * 2 / 5,
  },

  company: {
    fontSize: 24,
  },

  details: {
    fontSize: 18,
  },

  discount: {
    fontSize: 50,
    position: 'absolute',
    bottom: 0,
    right: 10,
  }
})