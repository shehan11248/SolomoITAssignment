import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'orange',
    width: wp('100'),
    height: hp('76'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 15,
    color: '#4b5c6b',
    marginLeft: wp('2'),
  },
  cardText1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: wp('4'),
    color: '#4b5c6b',
  },
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: hp('2'),
  },
  profileDataView: {
    width: wp('90'),
    paddingTop: hp('4'),
    paddingBottom: hp('5'),
  },
  detailsView: {
    width: wp('90'),
    flexDirection: 'row',
    paddingBottom: hp('1.5'),
    alignItems: 'center',
  },
  btn: {
    width: wp('85'),
    height: hp('6'),
    backgroundColor: '#6558f5',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 8,
  },
  btnTxt: {
    fontSize: 18,
    color: '#fff',
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
});
