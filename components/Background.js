import {ImageBackground, Text} from 'react-native';
import React, {Component} from 'react';

export default class Background extends Component {
  render() {
    return (
      <ImageBackground
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{
          resizeMode: 'stretch'
        }}>
        <Text>ART Mutual Rural</Text>
      </ImageBackground>
    );
  }
}