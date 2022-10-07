import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoginScreebStyle';

const LoginScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={Style.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home');
        }}>
        <Text>ssss</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.main.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(LoginScreen);
