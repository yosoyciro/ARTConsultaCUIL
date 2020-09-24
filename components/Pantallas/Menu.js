import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from '../Visuales/Spinner';
import Emergencia from '../Visuales/Emergencia';
import CajaMenu from '../Visuales/CajaMenu';
import Login from './Login';
import {isLogged, userLoggedDelete} from '../../functions/Auth';
import {ScrollView} from 'react-native-gesture-handler';
import CajaSubMenu from '../Visuales/CajaSubMenu';
//import {isLogged} from '../../functions/Auth';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleCajaMenu = this.handleCajaMenu.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      afiliadoDatos: [],
      loading: true,
      showRedPrestadores: false,
      //isLogged: false,
    };
  }

  componentDidMount() {
    //Verifico en el storage si el usuario está logueado
    isLogged().then(res => {
      //console.log('[Menu] - Respuesta isLogged: ' + res);
      this.setState({loading: false});
      switch (res) {
        case null:
          break;

        default:
          this.setState({afiliadoDatos: res.afiliadoDatos});
          break;
      }
    });
  }

  componentWillUnmount() {
    userLoggedDelete();
  }

  handleLogin(afiliadoDatos) {
    this.setState({afiliadoDatos});
  }

  handleCajaMenu(id) {
    console.log('handleCajaMenu ' + id);
    switch (id) {
      case 1:
        console.log('VerDatos');
        this.props.navigation.navigate('VerDatos', {
          afiliado: this.state.afiliadoDatos,
        });
        break;
      case 2:
        this.props.navigation.navigate('Credencial', {
          afiliado: this.state.afiliadoDatos,
        });
        break;
      case 6:
        this.props.navigation.navigate('DatosUtiles');
        break;
      case 7:
        this.setState({showRedPrestadores: !this.state.showRedPrestadores});
        break;
      case 71:
        this.props.navigation.navigate('Medicos');
        break;
      case 72:
        this.props.navigation.navigate('Farmacias');
        break;
      case 8:
        this.props.navigation.navigate('PreguntasFrecuentes');
        break;
      default:
        break;
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        alignSelf: 'stretch',
        backgroundColor: '#D2D3D5',
        height: '100%',
      },
    });

    return (
      <>
        {this.state.loading === true ? (
          <Spinner />
        ) : (
          <>
            {this.state.afiliadoDatos.length === 0 ? (
              <Login handleLogin={this.handleLogin} />
            ) : (
              <>
                <Emergencia backgroundColor="grey" />
                <ScrollView style={styles.container}>
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={1}
                    texto="Mis Datos"
                    disable={false}
                  />
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={2}
                    texto="Mi Credencial"
                    disable={true}
                  />
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={3}
                    texto="Procedimiento de Denuncia"
                    disable={true}
                  />
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={4}
                    texto="Mis Trámites"
                    disable={true}
                  />
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={5}
                    texto="Consultas y Reclamos"
                    disable={true}
                  />
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={6}
                    texto="Datos Útiles"
                    disable={false}
                  />
                  {this.state.showRedPrestadores === false ? (
                    <CajaMenu
                      handleCajaMenu={this.handleCajaMenu}
                      id={7}
                      texto="Red de Prestadores"
                      disable={false}
                    />
                  ) : (
                    <>
                      <CajaSubMenu
                        handleCajaMenu={this.handleCajaMenu}
                        id={7}
                        texto="Red de Prestadores"
                        disable={false}
                      />
                    </>
                  )}
                  <CajaMenu
                    handleCajaMenu={this.handleCajaMenu}
                    id={8}
                    texto="Preguntas Frecuentes"
                    disable={false}
                  />
                </ScrollView>
              </>
            )}
          </>
        )}
      </>
    );
  }
}
