import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';

export default class Medicos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicos: [
        {
          id: 1,
          Nombre: 'Sanatorio Chaco',
          Direccion: 'Direccion1',
          Latitud: -27.451937,
          Longitud: -58.981913,
        },
        {
          id: 2,
          Nombre: 'Sanatorio Guemes',
          Direccion: 'Direccion2',
          Latitud: 0,
          Longitud: 0,
        },
      ],
    };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        //marginTop: 10,
        backgroundColor: 'white',
        height: '100%',
        alignSelf: 'stretch',
        borderTopWidth: 1,
        borderTopColor: 'black',
      },
      medico: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      },
      tituloText: {
        marginTop: 10,
        color: 'black',
        fontSize: 24,
        /*alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 10,*/
        marginLeft: 10,
        fontFamily: 'Montserrat-Bold',
      },
      direccionText: {
        marginBottom: 10,
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Montserrat-Medium',
      },
      icono: {
        //padding: 5,
        marginTop: 20,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        right: 20,
        position: 'absolute',
      },
    });

    return (
      <>
        <Titulo titulo="Médicos" />
        <Emergencia backgroundColor="white" />
        <View style={styles.container}>
          {this.state.medicos.map((param, i) => {
            return (
              <View style={styles.medico}>
                <Text
                  style={styles.tituloText}
                  onPress={() => {
                    this.subMenu(param.id1);
                  }}>
                  {param.Nombre}
                </Text>
                <Text style={styles.direccionText}>{param.Direccion}</Text>
                <Image
                  source={require('../../images/Atención-al-Cliente.png')}
                  style={styles.icono}
                />
              </View>
            );
          })}
        </View>
      </>
    );
  }
}
