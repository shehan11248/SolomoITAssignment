const INITIAL_STATE = {
  loadingIndicate: false,
  isLoading: false,
  selectTab: 'home',
  loginUserName: '',
  loginPassword: '',
  productData: [],
  loginID: '',
  userData: {},
};

function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOGIN_UER_NAME':
      return {...state, loginUserName: action.payload};
    case 'SET_LOGIN_PASSWORD':
      return {...state, loginPassword: action.payload};
    case 'SET_SELECT_TAB':
      return {...state, selectTab: action.payload};
    case 'SET_LOADING_STATE':
      return {...state, selectTab: action.payload};
    case 'SET_PRODUCT_DATA':
      return {...state, productData: action.payload};
    case 'LOADING_INDICATE':
      return {...state, loadingIndicate: action.payload};
    case 'SET_REFRESH_STATE':
      return {...state, isLoading: action.payload};
    case 'SET_LOGIN_ID':
      return {...state, loginID: action.payload};
    case 'USER_DATA':
      return {...state, userData: action.payload};
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default loadingReducer;
