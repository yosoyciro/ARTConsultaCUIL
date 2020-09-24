import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

export default class CajaSubMenu extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.subMenu1 = this.subMenu.bind(this);
    this.state = {
      subMenu: [
        {
          tituloCaja: this.props.texto,
          idMenu: 7,
          id1: 71,
          titulo1: 'Médicos',
          id2: 72,
          titulo2: 'Farmacias',
        },
      ],
    };
  }

  onPress() {
    this.props.handleCajaMenu(this.props.id);
  }

  subMenu(id) {
    console.log('[CajaSubMenu] id: ' + id);
    this.props.handleCajaMenu(id);
  }
  render() {
    //#region  Estilos
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        //alignItems: 'center',
        alignSelf: 'stretch',
      },
      cajas: {
        flexDirection: 'row',
        marginTop: 15,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f8a700',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#f8a700',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
      },
      main: {
        flexDirection: 'row',
        backgroundColor: '#F8A700',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#F8A700',
        width: '100%',
        //marginLeft: 20,
        //height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 40,
      },
      mainBody: {
        marginTop: 15,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        //marginBottom: 10,
        backgroundColor: '#D28900',
        width: '90%',
        borderRadius: 25,
        borderWidth: 0,
        borderColor: '#D28900',
        marginLeft: 20,
        //marginTop: -40,
        //paddingTop: 20,
      },
      texto: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
      },
      bodyText: {
        color: 'white',
        fontSize: 16,
        //alignItems: 'center',
        //justifyContent: 'center',
        //alignSelf: 'stretch',
        padding: 10,
        //marginLeft: 20,
        fontFamily: 'Montserrat-Bold',
      },
      icono: {
        padding: 5,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        backgroundColor: '#83BC00',
        left: 2,
        position: 'absolute',
      },
    });
    //#endregion

    return (
      <View style={styles.container}>
        {this.state.subMenu.map((param, i) => {
          return (
            <>
              <View style={styles.mainBody}>
                <View style={styles.main}>
                  <Image
                    source={require('../../images/Atención-al-Cliente.png')}
                    style={styles.icono}
                  />
                  <TouchableOpacity
                    disabled={this.props.disable}
                    activeOpacity={0.5}
                    onPress={this.onPress}>
                    <Text style={styles.texto}> {param.tituloCaja} </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={styles.bodyText}
                  onPress={() => {
                    this.subMenu(param.id1);
                  }}>
                  {param.titulo1}
                </Text>
                <Text style={styles.bodyText}>{param.titulo2}</Text>
              </View>
            </>
          );
        })}
      </View>
    );
  }
}
