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
    paddingTop: hp('4'),
  },
  headerView: {
    // backgroundColor: 'red',
    width: wp('100'),
    height: hp('10'),
    borderBottomWidth: 3,
    borderColor: '#c0c9d2',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerView: {
    // backgroundColor: 'red',
    width: wp('100'),
    height: hp('10'),
    borderTopWidth: 3,
    borderColor: '#c0c9d2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingLeft: wp('10'),
    paddingRight: wp('10'),
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backView: {
    width: wp('20'),
    paddingLeft: wp('5'),
  },
  btnView: {
    width: 30,
    height: 30,
  },
});
