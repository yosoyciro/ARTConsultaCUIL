import {Alert} from 'react-native';

export default async function consultarCUIL(props) {
  try {
    let response = await fetch(
      'http://www.binarianet.com:8181/api/AfiliadoDatos/BuscarPorCUIL?pCUIL=' +
        props,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    let json = response.json();
    /*this.setState({
      resultado: json.Resultado,
      nombre: json.Nombre,
    });*/
    return json;
  } catch (error) {
    Alert.alert(error);
  } /*finally {
    this.setState({loading: !this.state.loading});
  }*/
}
