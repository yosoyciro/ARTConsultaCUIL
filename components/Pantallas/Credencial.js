import React, {Component} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Header from '../Visuales/Header';
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
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'flex-start', //use flex-start, flex-end ,center to adjust vertical position
        alignItems: 'center',
      },
      image: {
        //flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        width: '95%',
        height: '47%',
        marginBottom: 3,
        //margin: 5,
      },
      textNombre: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '27.5%', // position where you want
        left: '26%',
      },
      textCuil: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '23.6%', // position where you want
        left: '26%',
      },
      textEmpresa: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '19.8%', // position where you want
        left: '26%',
      },
      texTCUITEmpresa: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '16.1%', // position where you want
        left: '26%',
      },
      textNroContrato: {
        textAlign: 'left',
        fontSize: 8,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        position: 'absolute', // child
        bottom: '12.3%', // position where you want
        left: '35%',
      },
    });
    //#endregion

    /*let empresa = '';
    switch (this.props.route.params.afiliado.Empresa) {
      case 'REGISTRO NACIONAL DE TRABAJADORES RURALES Y EMPLEADORES - RENATRE':
        empresa = 'RENATRE';
        break;

      default:
        empresa = this.props.route.params.afiliado.Empresa;
        break;
    }*/
    const empresa = this.props.route.params.afiliado.Empresa;

    return (
      <>
        <Header />
        <Titulo titulo="Credencial" />
        <Emergencia backgroundColor="white" />
        <View style={styles.container}>
          <Image
            source={require('../../images/Credencial/Frente1.png')}
            style={styles.image}
          />
          <Image
            source={require('../../images/Credencial/Dorso1.png')}
            style={styles.image}
          />
          <Text style={styles.textNombre}>
            {this.props.route.params.afiliado.Nombre}
          </Text>
          <Text style={styles.textCuil}>
            {this.props.route.params.afiliado.Cuil}
          </Text>
          <Text style={styles.textEmpresa}>{empresa}</Text>
          <Text style={styles.texTCUITEmpresa}>
            {this.props.route.params.afiliado.CUITEmpresa}
          </Text>
          <Text style={styles.textNroContrato}>
            {this.props.route.params.afiliado.NroContrato}
          </Text>
        </View>
      </>
    );
  }
}
