import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Orientation from 'react-native-orientation';

export default class Resultado extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //alert(this.props.texto);
    return (
      <View>
        <Text>CUIL Ingresada: {this.props.cuil}</Text>
        <Text>{this.props.resultado}</Text>
        {this.props.nombre !== '' ? (
          <Text>Nombre: {this.props.nombre}</Text>
        ) : null}
      </View>
    );
  }
}
