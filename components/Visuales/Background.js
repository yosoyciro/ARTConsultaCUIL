import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

export default function Background() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require('../../images/Login.png')}
        style={[styles.image]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    height: '30%',
    width: '100%',
    backgroundColor: '#83bc00',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
