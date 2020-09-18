/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, TextInput, Button, ImageBackground, Alert} from 'react-native';
import Resultado from './Resultado';
import Spinner from './Spinner';
//import Orientation from 'react-native-orientation';
import Splash from './Splash';
import verificarCUIL from '../functions/VerificarCUIL';
import consultarCUIL from '../api/ConsultarCUIL';

//import Header from './components/Header';

export default class InicioOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuil: null,
      verGrilla: false,
      cuilValido: false,
      resultado: null,
      nombre: '',
      loading: false,
      showSplash: true,
    };
    //this.verificarCUIL = this.verificarCUIL.bind(this);
  }
  componentDidMount() {
    //Orientation.lockToPortrait();
    setTimeout(() => {
      this.setState({showSplash: false});
    }, 5000);
  }

  render() {
    return (
      <>
        {this.state.showSplash === true ? (
          <Splash />
        ) : (
          <View>
            <ImageBackground
              source={require('../images/ARTWEB_Logo.jpg')}
              style={{
                resizeMode: 'streched',
                width: 400,
                height: 100,
                marginTop: 1,
              }}
            />
            {this.state.loading === false ? (
              <>
                <TextInput
                  style={{borderWidth: 1}}
                  onChangeText={this.changeCUIL}
                  value={this.state.cuil}
                  placeholder="Ingrese CUIL"
                  keyboardType={'numeric'}
                />
                <Button onPress={this.onPress} title="Consultar" />
                <Resultado
                  cuil={this.state.cuil}
                  resultado={this.state.resultado}
                  nombre={this.state.nombre}
                />
                <Button
                  onPress={() => {
                    this.props.navigation.navigate('Credencial', {
                      nombre: this.state.nombre,
                      cuil: this.state.cuil,
                    });
                  }}
                  title="Ver Credencial"
                  disabled={this.state.nombre !== '' ? false : true}
                />
                <ImageBackground
                  source={require('../images/ARTWEB_Logo.jpg')}
                  style={{
                    resizeMode: 'center',
                    width: 400,
                    height: 100,
                    marginTop: 30,
                    opacity: 0.6,
                  }}
                />
              </>
            ) : (
              <Spinner />
            )}
          </View>
        )}
      </>
    );
  }

  onPress = async () => {
    this.setState({loading: !this.state.loading});
    const esCUILValido = await verificarCUIL(this.state.cuil);
    switch (esCUILValido) {
      case false:
        this.setState({loading: !this.state.loading});
        Alert.alert('CUIL inválido');
        break;

      case true:
        this.setState({
          cuilValido: true,
        });
        const resp = await consultarCUIL(this.state.cuil);
        switch (resp.nombre) {
          default:
            this.setState({
              resultado: resp.Resultado,
              nombre: resp.Nombre,
              loading: !this.state.loading,
            });
            break;
        }
        break;
    }
  };

  changeCUIL = cuil => {
    this.setState({
      cuil: cuil,
      resultado: null,
      nombre: '',
      cuilValido: false,
    });
  };
}
