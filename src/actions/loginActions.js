import URL from '../resources/baseUrl';

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

export const loginUser = data => async dispatch => {
  await URL.post('auth/login', data)
    .then(response => {
      console.log(response);
      data.navigation.navigate('home');
    })
    .catch(function (error) {});
};
