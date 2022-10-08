import URL from '../resources/baseUrl';
import async from 'async';
let SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({
  name: 'SolomoIT',
  createFromLocation: '~SolomoIT.db',
});

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

  dispatch({
    type: 'LOADING_STATE',
    payload: true,
  });

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
          dispatch({
            type: 'SELECT_PRODUCT_DATA',
            payload: obj,
          });
          dispatch({
            type: 'SET_SELECT_TAB',
            payload: 'pDetails',
          });
          dispatch({
            type: 'LOADING_STATE',
            payload: false,
          });
        },
      );
    })
    .catch(function (error) {});
};

export const getCartDetails = () => async dispatch => {
  let arr = [];
  let total = 0;

  db.transaction(txs => {
    txs.executeSql('SELECT * from Cart', [], (tx, results) => {
      let lengthCount = results.rows.length;

      arr = [];
      total = 0;

      for (let i = 0; i < lengthCount; i++) {
        total = total + results.rows.item(i).price;
        arr.push(results.rows.item(i));
      }

      dispatch({
        type: 'SET_CART_DATA',
        payload: arr,
      });

      dispatch({
        type: 'SET_TOTAL',
        payload: total,
      });
    });
  });
};

export const addCartDetails = obj => async dispatch => {
  db.transaction(txs => {
    txs.executeSql('SELECT * from Cart where id=?', [obj.id], (tx, results) => {
      let lengthCount = results.rows.length;
      let data = results.rows.item(0);

      console.log(data);

      if (data !== undefined) {
        db.transaction(function (txs) {
          txs.executeSql(
            'UPDATE Cart set quantity=?,price=? where id=?',
            [obj.qty + data.quantity, obj.price + data.price, obj.id],
            (txs, results1) => {
              console.log(results1);
              if (results1.rowsAffected > 0) {
                dispatch({
                  type: 'SET_SELECT_TAB',
                  payload: 'cart',
                });
              }
            },
          );
        });
      } else {
        db.transaction(txs2 => {
          txs2.executeSql(
            'INSERT INTO Cart (id,title,quantity,image,price) values (?,?,?,?,?)',
            [obj.id, obj.title, obj.qty, obj.image, obj.price],
            (tx2, results2) => {
              dispatch({
                type: 'SET_SELECT_TAB',
                payload: 'cart',
              });
            },
          );
        });
      }
    });
  });
};

export const deleteCartDetails = navigation => async dispatch => {
  let arr = [];
  let total = 0;

  db.transaction(txs => {
    txs.executeSql('DELETE FROM Cart', [], (tx, results) => {
      dispatch({
        type: 'SET_CART_DATA',
        payload: [],
      });

      dispatch({
        type: 'SET_TOTAL',
        payload: 0,
      });
      dispatch({
        type: 'SET_SELECT_TAB',
        payload: 'home',
      });

      navigation.navigate('home');
    });
  });
};

export const deleteSelectItem = id => async dispatch => {
  let arr = [];
  let total = 0;

  db.transaction(txs => {
    txs.executeSql('DELETE FROM Cart where id=?', [id], (tx1, results1) => {
      db.transaction(txs => {
        txs.executeSql('SELECT * from Cart', [], (tx, results) => {
          let lengthCount = results.rows.length;

          arr = [];
          total = 0;

          for (let i = 0; i < lengthCount; i++) {
            total = total + results.rows.item(i).price;
            arr.push(results.rows.item(i));
          }

          dispatch({
            type: 'SET_CART_DATA',
            payload: arr,
          });

          dispatch({
            type: 'SET_TOTAL',
            payload: total,
          });
        });
      });
    });
  });
};
