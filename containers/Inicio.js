import React, {Component} from 'react';
import Login from '../components/Login';
import Home from '../components/Menu';
import {View} from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      cuil: 0,
      nombre: '',
      cuilValido: false,
    };
  }

  handleLogin(nombre, cuil) {
    this.setState({
      nombre,
      cuil,
    });
  }

  handleLogout() {
    this.setState({
      nombre: '',
      cuil: 0,
    });
  }

  render() {
    console.log('Inicio');
    return (
      <View>
        {this.state.nombre === undefined || this.state.nombre === '' ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <Home
            nombre={this.state.nombre}
            cuil={this.state.cuil}
            handleLogout={this.handleLogout}
          />
        )}
      </View>
    );
  }
}
