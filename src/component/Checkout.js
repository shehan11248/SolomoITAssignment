import React, {useEffect, useState} from 'react';
import {BackHandler, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/CartStyle';
import {deleteCartDetails} from '../actions/ProductActions';
import HEADER from './common/Header';
import {setSelectTab} from '../actions/FooterActions';

const CheckOut = props => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleValidateClose = () => {
      props.setSelectTab('cart');
      navigation.navigate('home');

      return true;
    };

    const handler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleValidateClose,
    );

    return () => handler.remove();
  });

  const pay = () => {
    props.deleteCartDetails(navigation);
  };

  return (
    <View style={Style.checkoutMain}>
      <HEADER />

      <View style={Style.dataView}>
        <Text style={Style.cardTitleText} allowFontScaling={false}>
          Total
        </Text>
        <View style={Style.totalView}>
          <Text style={Style.priceText} allowFontScaling={false}>
            {props.totlePrice}$
          </Text>
        </View>
        <Text style={Style.cardTitleText} allowFontScaling={false}>
          Payment Method
        </Text>
        <View style={Style.radioBtnView}>
          <View style={Style.btnR} />
          <Text style={Style.txt} allowFontScaling={false}>
            Cash On Delivery
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={Style.btn}
        onPress={() => {
          pay();
        }}>
        <Text style={Style.btnTxt}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    totlePrice: state.main.totlePrice,
    selectTab: state.main.selectTab,
  };
};

export default connect(mapStateToProps, {
  deleteCartDetails,
  setSelectTab,
})(CheckOut);
