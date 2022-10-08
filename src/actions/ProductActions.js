import URL from '../resources/baseUrl';
import async from 'async';

export const setIsLoading = data => async dispatch => {
  dispatch({
    type: 'SET_REFRESH_STATE',
    payload: data,
  });
};

export const getAllProduct = (skip, limit, data) => async dispatch => {
  let array = data;

  dispatch({
    type: 'LOADING_INDICATE',
    payload: true,
  });
  await URL.get(`products?skip=${skip}&limit=${limit}`)
    .then(response => {
      async.forEach(
        response.data.products,
        (Object, Object_cb) => {
          array.push(Object);
          Object_cb();
        },
        ObjectErr => {
          dispatch({
            type: 'SET_PRODUCT_DATA',
            payload: array,
          });
          dispatch({
            type: 'SET_REFRESH_STATE',
            payload: false,
          });

          dispatch({
            type: 'LOADING_INDICATE',
            payload: false,
          });
        },
      );
    })
    .catch(function (error) {
      dispatch({
        type: 'LOADING_INDICATE',
        payload: false,
      });
      dispatch({
        type: 'SET_REFRESH_STATE',
        payload: false,
      });
    });
};
