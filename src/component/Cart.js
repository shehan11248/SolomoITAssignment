import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/CartStyle';
import {getCartDetails, deleteSelectItem} from '../actions/ProductActions';
import birthday from '../assets/Icons/birthday.png';
import noData from '../assets/Icons/noData.png';
import {BarIndicator} from 'react-native-indicators';
import {setSelectTab} from '../actions/FooterActions';

const Cart = props => {
  const navigation = useNavigation();

  const [emptyState, setEmptyState] = useState(false);

  useEffect(() => {
    props.getCartDetails();
  }, []);

  const remove = id => {
    props.deleteSelectItem(id);
  };

  const renderRow = ({item, i}) => {
    return (
      <View style={Style.CardView}>
        <View style={Style.imgView}>
          <Image source={{uri: item.image}} style={Style.productImage} />
        </View>
        <View style={Style.descView}>
          <Text style={Style.titleText}>{item.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Style.qText}>Quantity {item.quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Are you sure remove item?',
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
                        remove(item.id);
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }}>
              <Text style={Style.deleteTxt}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.priceView}>
          <Text style={Style.titleText}>{item.price}$</Text>
        </View>
      </View>
    );
  };

  const renderEmpty = () => {
    setTimeout(() => {
      setEmptyState(true);
    }, 2000);
    return (
      <View style={Style.emptyView}>
        {emptyState ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={noData}
              style={{
                width: 90,
                height: 90,
                marginBottom: 15,
              }}
            />
            <Text style={Style.cardTitleText}>No Data yet</Text>
          </View>
        ) : (
          <BarIndicator color="black" size={30} />
        )}
      </View>
    );
  };

  return (
    <View style={Style.mainContainer}>
      <View style={Style.flatListView}>
        <FlatList
          style={Style.flatList}
          data={props.cartData}
          renderItem={renderRow}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmpty}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={item => {}}
          onEndReachedThreshold={0.08}
          numColumns={0}
        />
      </View>

      {props.cartData[0] === undefined ? undefined : (
        <TouchableOpacity
          style={Style.btn}
          onPress={() => {
            props.setSelectTab('check');
            navigation.navigate('check');
          }}>
          <Text style={Style.btnTxt}>Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    cartData: state.main.cartData,
  };
};

export default connect(mapStateToProps, {
  getCartDetails,
  setSelectTab,
  deleteSelectItem,
})(Cart);
