import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <Image
      source={require('../../images/Header.png')}
      resizeMode="contain"
      backgroundColor="white"
      style={styles.backgroundImage}
    />
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: 'white',
    width: '100%',
    height: '7%',
  },
});
