import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/HomeScreenStyle';
import HEADER from './common/Header';
import FOOTER from './common/Footer';
import PRODUCT from './ProductComponent';
import CART from './Cart';
import USER from './Profile';
import PRODETAILS from './ProductDetails';

const HomeScreen = props => {
  const navigation = useNavigation();

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
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
