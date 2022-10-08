import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('76'),
    alignItems: 'center',
    paddingTop: hp('3'),
  },
  flatListView: {
    width: wp('90'),
    height: hp('68'),
    paddingBottom: hp('3'),
  },
  checkoutMain: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('100'),
    alignItems: 'center',
    paddingTop: hp('3'),
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qText: {
    fontSize: 16,
  },
  CardView: {
    width: wp('90'),
    height: hp('12'),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#c0c9d2',
    borderBottomWidth: 2,
  },
  imgView: {
    width: wp('25'),
    height: hp('12'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  descView: {
    width: wp('45'),
    height: hp('12'),
    justifyContent: 'center',
  },
  priceView: {
    width: wp('20'),
    height: hp('12'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 60,
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

  dataView: {
    width: wp('90'),
    marginTop: hp('8'),
  },

  cardTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: hp('1'),
  },
  totalView: {
    width: wp('90'),
    height: hp('20'),
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  radioBtnView: {
    width: wp('90'),
    height: hp('10'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('10'),
  },
  btnR: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderColor: '#4b5c6b',
    borderWidth: 6,
  },
  txt: {
    fontSize: 14,
    marginLeft: wp('2'),
  },
  emptyView: {
    width: wp('90'),
    height: hp('70'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  flatList: {
    width: wp('90'),
  },

  deleteTxt: {
    fontSize: 15,
    color: 'red',
    marginLeft: wp('5')
  },
});
