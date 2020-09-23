import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Titulo(props) {
  return (
    <View style={styles.containerTitulo}>
      <Text style={styles.background}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    backgroundColor: '#83BC00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  background: {
    width: '100%',
    color: 'white',
    fontSize: 27,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
});
