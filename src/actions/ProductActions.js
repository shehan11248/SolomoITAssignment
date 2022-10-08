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

export const getProductDetails = id => async dispatch => {
  let image = [];

  await URL.get(`products/${id}`)
    .then(response => {
      let obj = response.data;

      async.forEach(
        response.data.images,
        (Object, Object_cb) => {
          image.push({image: Object});
          Object_cb();
        },
        ObjectErr => {
          obj.images = image;
          console.log(obj);
          dispatch({
            type: 'SELECT_PRODUCT_DATA',
            payload: obj,
          });
          dispatch({
            type: 'SET_SELECT_TAB',
            payload: 'pDetails',
          });
        },
      );
    })
    .catch(function (error) {});
};
