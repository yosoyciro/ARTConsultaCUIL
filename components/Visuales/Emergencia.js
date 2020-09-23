import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Emergencia(props) {
  const tel = '08003336888';

  return props.backgroundColor === 'grey' ? (
    <View style={styles.containerGris}>
      <TouchableOpacity
        style={styles.cajas}
        activeOpacity={0.5}
        onPress={() => {
          Linking.openURL(`tel:${tel}`);
        }}>
        <Image
          source={require('../../images/Atención-al-Cliente.png')}
          style={styles.icono}
        />
        <Text style={styles.texto}> 0800 333 6888 </Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.containerBlanco}>
      <TouchableOpacity
        style={styles.cajas}
        activeOpacity={0.5}
        onPress={() => {
          Linking.openURL(`tel:${tel}`);
        }}>
        <Image
          source={require('../../images/Atención-al-Cliente.png')}
          style={styles.icono}
        />
        <Text style={styles.texto}> 0800 333 6888 </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGris: {
    backgroundColor: '#D2D3D5',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: '15%',
  },
  containerBlanco: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: '15%',
  },
  cajas: {
    flexDirection: 'row',
    marginTop: 1,
    padding: 7,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#f8a700',
    backgroundColor: '#f8a700',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 80,
  },
  texto: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily: 'Montserrat',
  },
  icono: {
    padding: 5,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
    backgroundColor: '#83BC00',
    left: 2,
    position: 'absolute',
  },
});
