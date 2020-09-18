import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Credencial extends Component {
  componentDidMount() {
    console.log('Parametros: ' + JSON.stringify(this.props.route.params));
  }

  render() {
    const direccion = 'Las casas';
    const nombre = 'Nombre: ' + this.props.route.params.nombre;

    return (
      <View>
        <Text>{direccion}</Text>
        <Text>{nombre}</Text>;
      </View>
    );
  }
}
