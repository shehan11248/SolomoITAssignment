import URL from '../resources/baseUrl';
import {AsyncStorage} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const setLoginUserName = text => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_UER_NAME',
    payload: text,
  });
};

export const setLoginPassword = text => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_PASSWORD',
    payload: text,
  });
};

export const setLoginID = text => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_ID',
    payload: text,
  });
};

export const loginUser = data => async dispatch => {
  await URL.post('auth/login', data)
    .then(response => {
      var obj = {
        id: response.data.id,
        token: response.data.token,
      };

      dispatch({
        type: 'SET_LOGIN_ID',
        payload: response.data.id,
      });

      AsyncStorage.setItem('loginDetails', 'exists');
      AsyncStorage.setItem('loginData', JSON.stringify(obj));

      data.navigation.navigate('home');
    })
    .catch(function (error) {
      showMessage({
        message: 'SolomoIT',
        description: error.response.data.message,
        type: 'danger',
        duration: 2000,
      });
    });
};

export const getUserData = id => async dispatch => {
  await URL.get(`users/${id}`)
    .then(response => {
      dispatch({
        type: 'USER_DATA',
        payload: response.data,
      });
    })
    .catch(function (error) {});
};
