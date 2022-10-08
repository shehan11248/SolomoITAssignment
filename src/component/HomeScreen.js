import React, {useEffect} from 'react';
import {Text, View, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/HomeScreenStyle';
import {getAllProduct} from '../actions/ProductActions';
import {getUserData} from '../actions/loginActions';
import HEADER from './common/Header';
import FOOTER from './common/Footer';
import PRODUCT from './ProductComponent';
import CART from './Cart';
import USER from './Profile';
import PRODETAILS from './ProductDetails';
import {setSelectTab} from '../actions/FooterActions';

const HomeScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    props.getAllProduct(0, 10, []);
    props.getUserData(props.loginID);
  }, []);

  useEffect(() => {
    const handleValidateClose = () => {
      if (props.selectTab === 'home') {
        BackHandler.exitApp();
      } else {
        props.setSelectTab('home');
      }

      return true;
    };

    const handler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleValidateClose,
    );

    return () => handler.remove();
  });

  return (
    <View style={Style.mainContainer}>
      {props.selectTab === 'pDetails' ? undefined : <HEADER />}

      {props.selectTab === 'home' ? (
        <PRODUCT />
      ) : props.selectTab === 'cart' ? (
        <CART />
      ) : props.selectTab === 'user' ? (
        <USER />
      ) : (
        <PRODETAILS />
      )}

      <FOOTER />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
    loginID: state.main.loginID,
  };
};

export default connect(mapStateToProps, {
  getAllProduct,
  getUserData,
  setSelectTab,
})(HomeScreen);
