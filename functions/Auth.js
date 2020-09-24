import store from 'react-native-simple-store';

export async function isLogged() {
  try {
    const res = await store.get('userLogged');
    return res;
  } catch (error) {
    console.log('Error ' + error);
    return false;
  }
}

export async function Logged(props) {
  try {
    store.update('userLogged', {
      afiliadoDatos: props,
    });
    return true;
  } catch (error) {
    console.log('Error ' + error);
    return false;
  }
}

export async function userLoggedDelete() {
  try {
    store.delete('userLogged');
    return true;
  } catch (error) {
    console.log('Error ' + error);
    return false;
  }
}
