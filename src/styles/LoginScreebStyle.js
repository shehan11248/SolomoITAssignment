import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'blue',
    width: wp('100'),
    height: hp('100'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
