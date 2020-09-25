import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';

export default class Credencial extends Component {
  /*_getParams(params) {
    const afiliado {
      nombre: {params.nombre},
      cuil: 0
    }
    return afiliado
  }*/

  render() {
    //#region  estilos
    const styles = StyleSheet.create({
      container: {
        //marginTop: 10,
        backgroundColor: 'white',
        height: '100%',
      },
      image: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        width: '100%',
      },
      textNombre: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '14%', // position where you want
        left: '23%',
      },
      textCuil: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '11%', // position where you want
        left: '23%',
      },
      textEmpresa: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '8%', // position where you want
        left: '23%',
      },
      textNroContrato: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '5%', // position where you want
        left: '32%',
      },
    });
    //#endregion

    return (
      <>
        <Titulo titulo="Credencial" />
        <Emergencia backgroundColor="white" />
        <Image
          source={require('../../images/Credencial.png')}
          style={styles.image}
        />
        <Text style={styles.textNombre}>
          {this.props.route.params.afiliado.Nombre}
        </Text>
        <Text style={styles.textCuil}>
          {this.props.route.params.afiliado.Cuil}
        </Text>
        <Text style={styles.textEmpresa}>EMPRESA</Text>
        <Text style={styles.textNroContrato}>NRO CONTRATO</Text>
      </>
    );
  }
}
