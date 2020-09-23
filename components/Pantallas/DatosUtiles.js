import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Linking} from 'react-native';

export default class PreguntasFrecuentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [
        {
          id: 1,
          titulo: 'Atención al cliente',
          body1: '0800-333-7268',
          tipo1: 'tel',
          valor1: '08003337268',
          body2: '+54 011 5346 3333',
          tipo2: 'whatsapp',
          valor2: '+541153463333',
        },
        {
          id: 2,
          titulo: 'Conmutador',
          body1: '+54 011 3754-6700',
          tipo1: 'tel',
          valor1: '+5401137546700',
          body2: 'contacto@artmutualrural.com.ar',
          tipo2: 'mail',
          valor2: 'contacto@artmutualrural.com.ar',
        },
        {
          id: 3,
          titulo: 'Gestión Nacional',
          body1: '0810-666-2787',
          tipo1: 'tel',
          valor1: '08106662787',
          body2: '',
        },
      ],
    };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        height: '100%',
        alignSelf: 'stretch',
      },
      main: {
        backgroundColor: '#F8A700',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#F8A700',
        width: '100%',
        //marginLeft: 20,
        //height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        //marginTop: 2,
        padding: 7,
        position: 'relative',
      },
      mainBody: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: '#ED6F00',
        width: '90%',
        borderRadius: 25,
        borderWidth: 0,
        borderColor: '#ED6F00',
        marginLeft: 20,
        //marginTop: -40,
        //paddingTop: 20,
      },
      header: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        width: '100%',
        textAlign: 'left',
        fontFamily: 'Montserrat-Bold',
      },
      bodyText: {
        color: 'white',
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 10,
        marginLeft: 20,
        fontFamily: 'Montserrat-Medium',
      },
    });

    return (
      <>
        <Titulo titulo="Datos Útiles" />
        <Emergencia backgroundColor="white" />
        <View style={styles.container}>
          {this.state.datos
            ? this.state.datos.map((param, i) => {
                return (
                  <>
                    <View style={styles.mainBody}>
                      <View style={styles.main}>
                        <TouchableOpacity>
                          <Text style={styles.headerText}>{param.titulo}</Text>
                        </TouchableOpacity>
                      </View>
                      <Text
                        style={styles.bodyText}
                        onPress={() => {
                          Linking.openURL(`tel:${param.valor1}`);
                        }}>
                        {param.body1}
                      </Text>
                      {param.tipo2 === 'mail' ? (
                        <Text
                          style={styles.bodyText}
                          onPress={() => {
                            Linking.openURL(`mailto:${param.valor2}`);
                          }}>
                          {param.body2}
                        </Text>
                      ) : (
                        <Text
                          style={styles.bodyText}
                          onPress={() => {
                            Linking.openURL(
                              `whatsapp://send?text=Hola quisiera relizar una consulta&phone=${
                                param.valor2
                              }`,
                            );
                          }}>
                          {param.body2}
                        </Text>
                      )}
                    </View>
                  </>
                );
              })
            : null}
        </View>
      </>
    );
  }
}
