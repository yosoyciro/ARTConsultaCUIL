/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ImageBackground, Image, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'center', // or 'stretch'
        backgroundColor: 'white',
        width: 300,
        height: 75,
      },
    });
    return (
      <Image
        source={require('../images/ARTWEB_Logo.jpg')}
        backgroundColor="white"
        style={styles.backgroundImage}
      />
    );
  }
}
