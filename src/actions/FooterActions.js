export const setSelectTab = text => async dispatch => {
  dispatch({
    type: 'SET_SELECT_TAB',
    payload: text,
  });
};
