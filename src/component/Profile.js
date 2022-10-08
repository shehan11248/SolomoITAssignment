import React, {useEffect} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/ProfileStyle';
import profile from '../assets/Profile.png';
import birthday from '../assets/Icons/birthday.png';
import gender from '../assets/Icons/gender.png';
import contact from '../assets/Icons/contact.png';
import study from '../assets/Icons/graduation.png';
import Home from '../assets/Icons/address.png';
import work from '../assets/Icons/university.png';
import workAs from '../assets/Icons/business.png';

const Profile = props => {
  const navigation = useNavigation();

  const logout = async () => {
    await AsyncStorage.removeItem('response');
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View style={Style.mainContainer}>
      <Image
        source={
          props.userData.image === 'default'
            ? profile
            : {uri: props.userData.image}
        }
        style={Style.profilePic}
      />

      <View style={Style.profileDataView}>
        <View style={Style.detailsView}>
          <Image source={birthday} style={Style.profileIcon} />
          <Text style={Style.cardText}>Birth date</Text>
          <Text style={Style.cardText1}>{props.userData.birthDate}</Text>
        </View>
        <View style={Style.detailsView}>
          <Image source={gender} style={Style.profileIcon} />
          <Text style={Style.cardText}>Gender</Text>
          <Text style={Style.cardText1}>{props.userData.gender}</Text>
        </View>
        <View style={Style.detailsView}>
          <Image source={contact} style={Style.profileIcon} />
          <Text style={Style.cardText}>Contact</Text>
          <Text style={Style.cardText1}>{props.userData.phone}</Text>
        </View>
        <View style={Style.detailsView}>
          <Image source={study} style={Style.profileIcon} />
          <Text style={Style.cardText}>Studies at</Text>
          <Text style={Style.cardText1}>{props.userData.university}</Text>
        </View>
        <View style={Style.detailsView}>
          <Image source={Home} style={Style.profileIcon} />
          <Text style={Style.cardText}>From</Text>
          <Text style={Style.cardText1}>{props.userData.address.city}</Text>
        </View>
        <View style={Style.detailsView}>
          <Image source={work} style={Style.profileIcon} />
          <Text style={Style.cardText}>Work at</Text>
          <Text style={Style.cardText1}>{props.userData.company.name}</Text>
        </View>
        <View style={Style.detailsView}>
          <Image source={workAs} style={Style.profileIcon} />
          <Text style={Style.cardText}>Work as a</Text>
          <Text style={Style.cardText1}>{props.userData.company.title}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={Style.btn}
        onPress={() => {
          Alert.alert(
            'Are you sure you want to logout?',
            '',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  logout();
                },
              },
            ],
            {cancelable: false},
          );
        }}>
        <Text style={Style.btnTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
    userData: state.main.userData,
  };
};

export default connect(mapStateToProps, {})(Profile);
