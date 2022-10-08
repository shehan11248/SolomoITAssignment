import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('86'),
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageCardView: {
    borderRadius: 20,
    height: hp(22),
    elevation: 10,
    backgroundColor: 'gray',
  },
  imageStyle: {
    width: wp(80),
    height: hp(22),
    borderRadius: 20,
  },
  backView: {
    width: wp(100),
    height: hp(6),
    marginBottom: hp('2'),
    justifyContent: 'center',
  },
  detailsView: {
    width: wp(80),
    // backgroundColor: 'blue',
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
  },
  cardTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: hp('1'),
  },
  cardDescriptionText: {
    fontSize: 15,
    textAlign: 'justify',
  },
  priceView: {
    width: wp(80),
    // backgroundColor: 'blue',
    paddingTop: hp('1'),
    paddingBottom: hp('1'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  QuentityView: {
    width: wp(80),
    // backgroundColor: 'blue',
    paddingTop: hp('5'),
    paddingBottom: hp('6'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
  },

  btn: {
    width: wp('85'),
    height: hp('6'),
    backgroundColor: '#6558f5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('1'),
    // elevation: 8,
  },
  btnTxt: {
    fontSize: 15,
    color: '#fff',
  },
  backImageStyle: {
    width: 60,
    height: 60,
  },
  slideView: {
    width: wp('70'),
    height: hp('8'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
