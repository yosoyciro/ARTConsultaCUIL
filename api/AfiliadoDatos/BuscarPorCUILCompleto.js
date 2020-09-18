import axios from '../axios';

export default async function BuscarPorCUILCompleto(props) {
  try {
    const datos = await axios.get(
      '/AfiliadoDatos/BuscarPorCUILCompleto?pCUIL=' + props,
    );

    return datos.data;
  } catch (error) {
    console.log('[BuscarPorCUILCompleto]' + error);
  }
}
