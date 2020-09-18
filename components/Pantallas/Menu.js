import React, {Component} from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import Spinner from '../Visuales/Spinner';
import BuscarPorCUILCompleto from '../../api/AfiliadoDatos/BuscarPorCUILCompleto';
import Emergencia from '../Visuales/Emergencia';
import CajaMenu from '../Visuales/CajaMenu';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleCajaMenu = this.handleCajaMenu.bind(this);
    this.state = {
      afiliadoDatos: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.cargarDatos();
  }

  cargarDatos() {
    //Llamo a un metodo para traer todos los datos del expuesto
    console.log('cuil: ' + this.props.route.params.cuil);
    BuscarPorCUILCompleto(this.props.route.params.cuil).then(afiliadoDatos => {
      //console.log(JSON.stringify(afiliadoDatos));
      this.setState({afiliadoDatos, loading: !this.state.loading});
      Alert.alert(`Bienvenido ${afiliadoDatos.Nombre}`);
    });
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
            <Emergencia backgroundColor="grey" />
            <View style={styles.container}>
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
              <CajaMenu
                handleCajaMenu={this.handleCajaMenu}
                id={7}
                texto="Red de Prestadores"
                disable={true}
              />
              <CajaMenu
                handleCajaMenu={this.handleCajaMenu}
                id={8}
                texto="Preguntas Frecuentes"
                disable={false}
              />
            </View>
          </>
        )}
      </>
    );
  }
}
