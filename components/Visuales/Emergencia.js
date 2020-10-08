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
          source={require('../../images/Iconos/EMERGENCIA.png')}
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
          source={require('../../images/Iconos/EMERGENCIA.png')}
          style={styles.icono}
        />
        <Text style={styles.texto}> 0800 333 6888 </Text>
      </TouchableOpacity>
    </View>
  );
}

//#region Estilos
const styles = StyleSheet.create({
  containerGris: {
    backgroundColor: '#D2D3D5',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: '17%',
  },
  containerBlanco: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: '17%',
  },
  cajas: {
    flexDirection: 'row',
    //marginTop: 1,
    //padding: 7,
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
    fontSize: 30,
    color: 'white',
    //marginLeft: 20,
    right: 5,
    fontFamily: 'Montserrat-ExtraBold',
    position: 'absolute',
    //textAlign: 'right',
  },
  icono: {
    //padding: 5,
    //margin: 5,
    height: 55,
    width: 55,
    resizeMode: 'stretch',
    backgroundColor: '#F8A700',
    left: 8,
    position: 'absolute',
  },
});
//#endregion
