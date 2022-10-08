import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../../styles/HomeScreenStyle';
import {setSelectTab} from '../../actions/FooterActions';

const Header = props => {
  const navigation = useNavigation();

  return (
    <View style={Style.headerView}>
      {props.selectTab === 'check' ? (
        <TouchableOpacity
          style={Style.backView}
          onPress={() => {
            props.setSelectTab('cart');
            navigation.navigate('home');
          }}>
          <Text style={Style.backText} allowFontScaling={false}>
            Back
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={Style.backView} />
      )}

      <Text style={Style.titleText} allowFontScaling={false}>
        {props.selectTab === 'home'
          ? 'Products'
          : props.selectTab === 'cart'
          ? 'Cart'
          : props.selectTab === 'check'
          ? 'Checkout'
          : props.userData.firstName}
      </Text>
      <View style={Style.backView} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
    userData: state.main.userData,
  };
};

export default connect(mapStateToProps, {
  setSelectTab,
})(Header);
