import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    console.log('Splash');
    const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
      },
    });
    return (
      <Image
        source={require('../../images/Splash.png')}
        backgroundColor="white"
        style={styles.backgroundImage}
      />
    );
  }
}
