import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  PermissionsAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoadingScreenStyle';
import {setLoginID} from '../actions/loginActions';

import logo from '../assets/logo.png';

const LoadingScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    naviagte();
  });

  const naviagte = async () => {
    let login = await AsyncStorage.getItem('loginDetails');

    let loginDetails = await AsyncStorage.getItem('loginData');
    let logindata = JSON.parse(loginDetails);

    setTimeout(() => {
      if (login === 'exists') {
        props.setLoginID(logindata.id);
        navigation.navigate('home');
      } else {
        navigation.navigate('Login');
      }
    }, 2000);
  };

  return (
    <View style={Style.mainContainer}>
      <Image source={logo} style={Style.logo} />
    </View>
  );
};

const mapStateToProps = state => {};

export default connect(mapStateToProps, {
  setLoginID,
})(LoadingScreen);
