import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainView: {
    width: wp('100'),
    height: hp('76'),
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingTop: hp('2'),
  },
  productCard: {
    width: wp('90'),
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
    // backgroundColor: 'yellow',
  },
  cardTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDescriptionText: {
    fontSize: 15,
  },
  imageView: {
    width: wp('90'),
    height: hp('25'),
    backgroundColor: 'gray',
    marginTop: hp('2'),
  },
  flatList: {
    width: wp('90'),
  },
});
