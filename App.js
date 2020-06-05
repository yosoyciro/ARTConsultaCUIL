/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

//import Header from './components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuil: null,
      verGrilla: false,
      cuilValido: false,
      resultado: null,
      nombre: '',
      loading: false,
    };
    this.verificarCUIL = this.verificarCUIL.bind(this);
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('./images/ARTWEB_Logo.jpg')}
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
            <ImageBackground
              source={require('./images/ARTWEB_Logo.jpg')}
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
    );
  }

  onPress = () => {
    this.setState({loading: !this.state.loading});
    this.verificarCUIL().then(resp => {
      switch (resp) {
        case false:
          this.setState({loading: !this.state.loading});
          alert('CUIL incorrecto');
          break;
        case true:
          this.setState({cuilValido: true});
          this.consultarCUIL();
          break;
      }
    });
  };

  changeCUIL = cuil => {
    this.setState({
      cuil: cuil,
      resultado: null,
      nombre: '',
    });
  };

  async verificarCUIL() {
    /*let cuil = '';
    cuil = this.state.cuil;
    if (cuil.length === 11) {
      return true;
    } else {
      return false;
    }*/
    let inputString = '';
    let division = 0;
    inputString = this.state.cuil.toString();
    if (inputString.length === 11) {
      var Caracters_1_2 = inputString.charAt(0) + inputString.charAt(1);
      if (
        Caracters_1_2 == '20' ||
        Caracters_1_2 == '23' ||
        Caracters_1_2 == '24' ||
        Caracters_1_2 == '27' ||
        Caracters_1_2 == '30' ||
        Caracters_1_2 == '33' ||
        Caracters_1_2 == '34'
      ) {
        var Count =
          inputString.charAt(0) * 5 +
          inputString.charAt(1) * 4 +
          inputString.charAt(2) * 3 +
          inputString.charAt(3) * 2 +
          inputString.charAt(4) * 7 +
          inputString.charAt(5) * 6 +
          inputString.charAt(6) * 5 +
          inputString.charAt(7) * 4 +
          inputString.charAt(8) * 3 +
          inputString.charAt(9) * 2 +
          inputString.charAt(10) * 1;
        division = Count / 11;
        if (division == Math.floor(division)) {
          return true;
        }
      }
    }
    return false;
  }

  async consultarCUIL() {
    try {
      let response = await fetch(
        'http://www.binarianet.com:8181/api/AfiliadoDatos/BuscarPorCUIL?pCUIL=' +
          this.state.cuil,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let json = await response.json();
      this.setState({
        resultado: json.Resultado,
        nombre: json.Nombre,
      });
      return json;
    } catch (error) {
      alert(error);
    } finally {
      this.setState({loading: !this.state.loading});
    }
  }
}
