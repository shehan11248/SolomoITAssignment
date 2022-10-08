import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoginScreenStyle';
import {showMessage} from 'react-native-flash-message';
import {
  setLoginPassword,
  setLoginUserName,
  loginUser,
  setLoginID,
} from '../actions/loginActions';

const LoginScreen = props => {
  const navigation = useNavigation();

  const login = () => {
    if (props.loginUserName !== '') {
      if (props.loginPassword !== '') {
        let obj = {
          username: props.loginUserName,
          password: props.loginPassword,
          navigation: navigation,
        };
        props.loginUser(obj);
      } else {
        showMessage({
          message: 'SolomoIT',
          description: 'Missing the password field.',
          type: 'warning',
          duration: 1000,
        });
      }
    } else {
      showMessage({
        message: 'SolomoIT',
        description: 'Please type user name',
        type: 'danger',
        duration: 2000,
      });
    }
  };

  return (
    <View style={Style.mainContainer}>
      <Text style={Style.titleText} allowFontScaling={false}>
        Practical Test
      </Text>
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
            login();
          }}>
          <Text style={Style.btnTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loginUserName: state.main.loginUserName,
    loginPassword: state.main.loginPassword,
  };
};

export default connect(mapStateToProps, {
  setLoginPassword,
  setLoginUserName,
  loginUser,
  setLoginID,
})(LoginScreen);
