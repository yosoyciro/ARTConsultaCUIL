import axios from '../axios';
import {Alert} from 'react-native';

export default async function LoginCUIL(props) {
  try {
    const datos = await axios.get(
      '/AfiliadoDatos/BuscarPorCUIL?pCUIL=' + props,
    );
    return datos.data;
  } catch (error) {
    Alert.alert(error);
  }
}
