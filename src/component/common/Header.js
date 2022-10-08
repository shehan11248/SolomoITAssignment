import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../../styles/HomeScreenStyle';

const Header = props => {
  const navigation = useNavigation();

  return (
    <View style={Style.headerView}>
      <Text style={Style.titleText} allowFontScaling={false}>
        {props.selectTab === 'home'
          ? 'Products'
          : props.selectTab === 'cart'
          ? 'Cart'
          : props.userData.firstName}
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
    userData: state.main.userData,
  };
};

export default connect(mapStateToProps, {})(Header);
