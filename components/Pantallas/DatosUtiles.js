import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Emergencia from '../Visuales/Emergencia';
import Titulo from '../Visuales/Titulo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Linking} from 'react-native';
import Header from '../Visuales/Header';
import IconoMenu from '../Visuales/IconoMenu';

export default class PreguntasFrecuentes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [
        {
          id: 1,
          titulo: 'Atención al cliente',
          idIconoTitulo: 61,
          body1: '0800-333-7268',
          tipo1: 'tel',
          valor1: '08003337268',
          idIcono1: 611,
          body2: '+54 011 5346 3333',
          tipo2: 'whatsapp',
          valor2: '+541153463333',
          idIcono2: 612,
        },
        {
          id: 2,
          titulo: 'Conmutador',
          idIconoTitulo: 62,
          body1: '+54 011 3754-6700',
          tipo1: 'tel',
          valor1: '+5401137546700',
          idIcono1: 621,
          body2: 'contacto@artmutualrural.com.ar',
          tipo2: 'mail',
          valor2: 'contacto@artmutualrural.com.ar',
          idIcono2: 622,
        },
        {
          id: 3,
          titulo: 'Gestión Nacional',
          idIconoTitulo: 63,
          body1: '0810-666-2787',
          tipo1: 'tel',
          valor1: '08106662787',
          idIcono1: 631,
          body2: '',
        },
      ],
    };
  }

  render() {
    //#region Estilos
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
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
        //marginTop: 2,
        //padding: 7,
        //position: 'relative',
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
        //paddingVertical: 5,
        //paddingHorizontal: 12,
        //flexWrap: 'wrap',
        //flexDirection: 'row',
        alignItems: 'center',
        height: 40,
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
      },
      bodyText: {
        color: 'white',
        fontSize: 17,
        width: '90%',
        /*alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 10,
        marginLeft: 35,*/
        textAlign: 'left',
        marginLeft: 30,
        fontFamily: 'Montserrat-Medium',
      },
      cajas: {
        display: this.props.disable === true ? 'none' : 'flex',
        flexDirection: 'row',
        backgroundColor: '#f8a700',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f8a700',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
      },
      cajasItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
        marginLeft: 5,
      },
    });
    //#endregion

    return (
      <>
        <Header />
        <Titulo titulo="Datos Útiles" />
        <Emergencia backgroundColor="white" />
        <View style={styles.container}>
          {this.state.datos
            ? this.state.datos.map((param, i) => {
                return (
                  <>
                    <View style={styles.mainBody}>
                      <View style={styles.main}>
                        <TouchableOpacity style={styles.cajas}>
                          <IconoMenu id={param.idIconoTitulo} />
                          <Text style={styles.headerText}>{param.titulo}</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={styles.cajasItem}>
                        <IconoMenu id={param.idIcono1} />
                        <Text
                          style={styles.bodyText}
                          onPress={() => {
                            Linking.openURL(`tel:${param.valor1}`);
                          }}>
                          {param.body1}
                        </Text>
                      </TouchableOpacity>

                      {param.tipo2 === 'mail' ? (
                        <>
                          <TouchableOpacity
                            style={styles.cajasItem}
                            disabled={true}>
                            <IconoMenu id={param.idIcono2} />
                            <Text
                              style={styles.bodyText}
                              onPress={() => {
                                Linking.openURL(`mailto:${param.valor2}`);
                              }}>
                              {param.body2}
                            </Text>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          <TouchableOpacity style={styles.cajasItem}>
                            <IconoMenu id={param.idIcono2} />
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
                          </TouchableOpacity>
                        </>
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
