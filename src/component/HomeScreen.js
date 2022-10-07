import React, {useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/HomeScreenStyle';

const HomeScreen = props => {
  const navigation = useNavigation();

  return <View style={Style.mainContainer} />;
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.main.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
