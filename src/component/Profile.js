import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/ProfileStyle';

const Profile = props => {
  const navigation = useNavigation();

  return <View style={Style.mainContainer} />;
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
  };
};

export default connect(mapStateToProps, {})(Profile);
