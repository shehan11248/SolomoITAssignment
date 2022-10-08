import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../../styles/HomeScreenStyle';
import {setSelectTab} from '../../actions/FooterActions';

import user from '../../assets/Icons/user.png';
import userSelect from '../../assets/Icons/userSelect.png';
import cart from '../../assets/Icons/cart.png';
import cartSelect from '../../assets/Icons/cartSelect.png';
import home from '../../assets/Icons/home.png';
import homeSelect from '../../assets/Icons/homeSelect.png';

const Footer = props => {
  const navigation = useNavigation();

  return (
    <View style={Style.footerView}>
      <TouchableOpacity
        onPress={() => {
          props.setSelectTab('home');
        }}>
        <Image
          source={props.selectTab === 'home' ? homeSelect : home}
          style={Style.btnView}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setSelectTab('cart');
        }}>
        <Image
          source={props.selectTab === 'cart' ? cartSelect : cart}
          style={Style.btnView}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setSelectTab('user');
        }}>
        <Image
          source={props.selectTab === 'user' ? userSelect : user}
          style={Style.btnView}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
  };
};

export default connect(mapStateToProps, {
  setSelectTab,
})(Footer);
