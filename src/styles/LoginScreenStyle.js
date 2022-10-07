import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('100'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  formView: {
    width: wp('100'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('10'),
    paddingBottom: hp('10'),
  },
  textInputView: {
    width: wp('85'),
    height: hp('6'),
    backgroundColor: '#FFFFFF',
    paddingLeft: wp('2'),
    marginBottom: hp('2'),
    justifyContent: 'center',
    borderColor: '#e1e5ea',
    borderWidth: 3,
  },
  txtInput: {
    width: wp('60'),
    height: hp('6'),
    fontSize: 15,
  },
  btn: {
    width: wp('85'),
    height: hp('6'),
    backgroundColor: '#6558f5',
    marginTop: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  btnTxt: {
    fontSize: 18,
    color: '#fff',
  },
});
