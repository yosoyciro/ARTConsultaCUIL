import React, {Component} from 'react';
import {View, TextInput, Alert, StyleSheet, Text} from 'react-native';
import Spinner from '../Visuales/Spinner';
import Background from '../Visuales/Background';
import verificarCUIL from '../../functions/VerificarCUIL';
import LoginCUIL from '../../api/AfiliadoDatos/LoginCUIL';
//import {onSignIn} from './auth';
import Header from '../Visuales/Header';
import {TouchableOpacity} from 'react-native';
import Splash from '../Visuales/Splash';
import BuscarPorCUILCompleto from '../../api/AfiliadoDatos/BuscarPorCUILCompleto';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      cuil: 20227180871,
      verGrilla: false,
      cuilValido: false,
      resultado: null,
      nombre: '',
      loading: false,
      showSplash: true,
      isLogged: true,
    };
  }

  componentDidMount() {
    //Orientation.lockToPortrait();
    console.log('Inicio showSplash: ' + this.state.showSplash);
    setTimeout(() => {
      this.setState({showSplash: false});
    }, 3000);
  }

  render() {
    //Estilos
    const styles = StyleSheet.create({
      background: {
        alignSelf: 'stretch',
        padding: 10,
        justifyContent: 'flex-start', //use flex-start, flex-end ,center to adjust vertical position
        alignItems: 'center',
        backgroundColor: '#83bc00',
        height: '100%',
        width: '100%',
      },
      cuilInputStyle: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#83bc00',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 5,
        height: 40,
        width: 320,
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
      },
      ingresarButtonStyle: {
        marginTop: 10,
        backgroundColor: '#169D00',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#83bc00',
        height: 40,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat-Medium',
      },
      texto: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Montserrat-Medium',
      },
    });

    return (
      <>
        {this.state.showSplash === true ? (
          <Splash />
        ) : (
          <>
            <Header />
            <Background />
            <View style={styles.background}>
              {this.state.loading === false ? (
                <>
                  <TextInput
                    style={styles.cuilInputStyle}
                    onChangeText={this.changeCUIL}
                    value={this.state.cuil}
                    placeholder="CUIL/CUIT"
                    keyboardType={'numeric'}
                    defaultValue="20227180871"
                  />
                  <TouchableOpacity
                    style={styles.ingresarButtonStyle}
                    activeOpacity={0.5}
                    onPress={this.onPress}
                    disabled={false}>
                    <Text style={styles.texto}> INICIAR SESION </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <Spinner />
              )}
            </View>
          </>
        )}
      </>
    );
  }

  onPress = async () => {
    console.log('inicia login ' + this.state.cuil);
    this.setState({loading: !this.state.loading});
    const esCUILValido = await verificarCUIL(this.state.cuil);
    //console.log('esCUILValido: ' + esCUILValido);
    switch (esCUILValido) {
      case false:
        this.setState({loading: !this.state.loading});
        Alert.alert('Formato de CUIL incorrecto');
        break;

      case true:
        this.setState({
          cuilValido: true,
        });
        const resp = await LoginCUIL(this.state.cuil);
        switch (resp.Nombre) {
          case '':
            this.setState({loading: !this.state.loading});
            Alert.alert('CUIT/CUIL no registrado');
            break;
          default:
            this.setState({
              resultado: resp.Resultado,
              nombre: resp.Nombre,
            });
            //this.setState({loading: !this.state.loading});
            this.handleLogin(this.state.cuil);

            //this.props.navigation.navigate('Menu', {cuil: this.state.cuil});
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

  handleLogin = cuil => {
    BuscarPorCUILCompleto(cuil).then(
      afiliadoDatos => {
        //console.log(JSON.stringify(afiliadoDatos));
        this.setState({afiliadoDatos});
        this.props.handleLogin(afiliadoDatos);
      },
      error => {
        this.setState({loading: !this.state.loading});
        Alert.alert('Error buscando datos del expuesto ' + error);
      },
    );
  };
}
