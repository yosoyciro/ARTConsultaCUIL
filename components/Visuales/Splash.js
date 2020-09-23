import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    console.log('Splash');
    const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: '100%',
      },
    });
    return (
      <Image
        source={require('../../images/Splash.png')}
        style={styles.backgroundImage}
      />
    );
  }
}
