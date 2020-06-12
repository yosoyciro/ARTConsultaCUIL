/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, ImageBackground} from 'react-native';
import Orientation from 'react-native-orientation';

export default class Credencial extends Component {
  componentDidMount() {
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }

  /*_getParams(params) {
    const afiliado {
      nombre: {params.nombre},
      cuil: 0
    }
    return afiliado
  }*/

  render() {
    return (
      <ImageBackground
        source={require('../images/CREDENCIAL_WEB-1.jpg')}
        resizeMode="stretch"
        style={{
          width: null,
          height: null,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          resizeMode: 'stretch',
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 8,
            color: 'black',
            position: 'absolute', // child
            bottom: '46%', // position where you want
            left: '63%',
          }}>
          {this.props.route.params.nombre}
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 8,
            color: 'black',
            position: 'absolute', // child
            bottom: '38%', // position where you want
            left: '63%',
          }}>
          {this.props.route.params.cuil}
        </Text>
      </ImageBackground>
    );
  }
}
