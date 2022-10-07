import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoginScreenStyle';

const LoginScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={Style.mainContainer}>
      <Text style={Style.titleText}>Practical Test</Text>
      <View style={Style.formView}>
        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'Username'}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              props.setLoginUserName(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              props.setLoginPassword(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <TouchableOpacity
          style={Style.btn}
          onPress={() => {
            navigation.navigate('home');
          }}>
          <Text style={Style.btnTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.main.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(LoginScreen);
