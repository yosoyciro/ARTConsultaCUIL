import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Header from '../Visuales/Header';
import Titulo from '../Visuales/Titulo';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Medicos extends Component {
  constructor(props) {
    super(props);
    this.medicoSeleccionado = this.medicoSeleccionado.bind(this);
    this.state = {
      medicos: [
        {
          id: 1,
          Nombre: 'Sanatorio Chaco',
          Direccion: 'Direccion 1',
          Latitud: -27.451937,
          Longitud: -58.981913,
        },
        {
          id: 2,
          Nombre: 'Sanatorio Guemes',
          Direccion: 'Direccion 2',
          Latitud: -27.447563,
          Longitud: -58.981154,
        },
      ],
    };
  }

  medicoSeleccionado(nombre, direccion, latitud, longitud) {
    this.props.navigation.navigate('Maps', {
      latitud: latitud,
      longitud: longitud,
      nombre: nombre,
      direccion: direccion,
    });
  }

  render() {
    //#region  Estilos
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
        height: 50,
        width: 50,
        resizeMode: 'cover',
        right: 20,
        position: 'absolute',
        fontSize: 25,
      },
      button: {
        marginTop: 7,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        right: 20,
        position: 'absolute',
      },
    });
    //#endregion

    return (
      <>
        <Header />
        <Titulo titulo="Médicos" />
        <Emergencia backgroundColor="white" />
        <View style={styles.container}>
          {this.state.medicos.map((param, i) => {
            return (
              <View style={styles.medico}>
                <Text style={styles.tituloText}>{param.Nombre}</Text>
                <Text style={styles.direccionText}>{param.Direccion}</Text>
                <Icon
                  style={styles.icono}
                  name="map-marker"
                  onPress={() => {
                    this.medicoSeleccionado(
                      param.Nombre,
                      param.Direccion,
                      param.Latitud,
                      param.Longitud,
                    );
                  }}
                />
              </View>
            );
          })}
        </View>
      </>
    );
  }
}
