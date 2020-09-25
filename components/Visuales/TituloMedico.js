import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function TituloMedico(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{props.nombre}</Text>
      <Text style={styles.direccion}>{props.direccion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    backgroundColor: '#83BC00',
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  nombre: {
    //width: '100%',
    color: 'white',
    fontSize: 25,
    //justifyContent: 'center',
    //textAlign: 'center',
    left: 20,
    fontFamily: 'Montserrat-Bold',
  },
  direccion: {
    //width: '100%',
    color: 'white',
    fontSize: 18,
    left: 20,
    fontFamily: 'Montserrat-Medium',
  },
});
