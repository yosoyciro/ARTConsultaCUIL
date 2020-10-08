import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Header from '../Visuales/Header';
import Titulo from '../Visuales/Titulo';

export default class ProcedimientoDenuncia extends Component {
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
        //margin: 20,
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        width: '100%',
        backgroundColor: 'white',
      },
    });
    //#endregion

    return (
      <>
        <Header />
        <Titulo titulo="Procedimiento Denuncia" />
        <Emergencia backgroundColor="white" />
        <Image
          source={require('../../images/ProcedimientoDenuncia.png')}
          style={styles.image}
        />
      </>
    );
  }
}
