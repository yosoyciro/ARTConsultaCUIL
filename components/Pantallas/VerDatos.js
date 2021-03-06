import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';
import FormatearFechaCelda from '../../functions/FormatoFechaHora';
import Header from '../Visuales/Header';

export default function VerDatos(props) {
  //Datos transformados
  let EstadoCivil = '';
  let Sexo = '';
  var fechaNacimiento = FormatearFechaCelda(
    props.route.params.afiliado.FechaNacimiento,
  );
  const pais =
    props.route.params.afiliado.Pais !== null
      ? props.route.params.afiliado.Pais.Pais
      : 'No especificado';

  const codigoPostal =
    props.route.params.afiliado.SRTLocalidad !== null
      ? props.route.params.afiliado.SRTLocalidad.CodPostal
      : 0;

  const localidad =
    props.route.params.afiliado.SRTLocalidad !== null
      ? props.route.params.afiliado.SRTLocalidad.Nombre
      : 'Sin Localidad';

  const telefono =
    props.route.params.afiliado.Telefono !== null
      ? props.route.params.afiliado.Telefono
      : 'Sin Telefono';

  const email =
    props.route.params.afiliado.eMail !== null
      ? props.route.params.afiliado.eMail
      : 'Sin eMail';

  switch (props.route.params.afiliado.EstadoCivil) {
    case 'C':
      EstadoCivil = 'Casado';
      break;
    case 'D':
      EstadoCivil = 'Divorciado';
      break;
    case 'E':
      EstadoCivil = 'Separado';
      break;
    case 'S':
      EstadoCivil = 'Soltero';
      break;
    case 'U':
      EstadoCivil = 'Unión Hecho';
      break;
    case 'V':
      EstadoCivil = 'Viudo';
      break;
    case 'I':
      EstadoCivil = 'Ind.';
      break;
    default:
      EstadoCivil = 'No especificado';
      break;
  }

  switch (props.route.params.afiliado.Sexo) {
    case 'F':
      Sexo = 'Femenino';
      break;
    case 'M':
      Sexo = 'Masculino';
      break;
    default:
      Sexo = 'No especificado';
      break;
  }

  const direccion =
    props.route.params.afiliado.DomicilioCalle +
    ' ' +
    props.route.params.afiliado.DomicilioNro;

  const piso = props.route.params.afiliado.DomicilioPiso;
  const depto = props.route.params.afiliado.DomicilioDpto;
  const deptoDisplay = piso.trim() + '-' + depto.trim();

  return (
    <>
      <Header />
      <Titulo titulo="Mis Datos" />
      <Emergencia backgroundColor="white" />
      <ScrollView style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.background}>
            {props.route.params.afiliado.Nombre}
          </Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{direccion}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.backgroundChicoIzq}>{deptoDisplay}</Text>
          <Text style={styles.backgroundChicoDer}>{codigoPostal}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{localidad}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{telefono}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{email}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{Sexo}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{fechaNacimiento}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{EstadoCivil}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>{pais}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>CBU</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.background}>
            {props.route.params.afiliado.Cuil}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

//#region Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  containerText: {
    marginTop: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#D2D3D5',
    backgroundColor: '#D2D3D5',
    textAlign: 'left',
    paddingLeft: 10,
    height: 30,
    width: '90%',
    color: 'grey',
    fontSize: 18,
    justifyContent: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  backgroundChicoIzq: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#D2D3D5',
    backgroundColor: '#D2D3D5',
    textAlign: 'left',
    paddingLeft: 10,
    height: 30,
    width: '40%',
    color: 'grey',
    fontSize: 18,
    justifyContent: 'center',
    marginRight: 20,
    fontFamily: 'Montserrat-Medium',
  },
  backgroundChicoDer: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#D2D3D5',
    backgroundColor: '#D2D3D5',
    textAlign: 'left',
    paddingLeft: 10,
    height: 30,
    width: '40%',
    color: 'grey',
    fontSize: 18,
    justifyContent: 'center',
    marginLeft: 20,
    fontFamily: 'Montserrat-Medium',
  },
});
//#endregion
