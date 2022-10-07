const INITIAL_STATE = {
  loadingIndicate: 'false',
  selectTab: 'home',
  loginUserName: '',
  loginPassword: '',
};

function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOGIN_UER_NAME':
      return {...state, loginUserName: action.payload};
    case 'SET_LOGIN_PASSWORD':
      return {...state, loginPassword: action.payload};
    case 'SET_SELECT_TAB':
      return {...state, selectTab: action.payload};
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default loadingReducer;
