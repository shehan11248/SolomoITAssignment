import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/ProductStyle';
import {
  getAllProduct,
  setIsLoading,
  getProductDetails,
} from '../actions/ProductActions';
import {setSelectTab} from '../actions/FooterActions';
import {BarIndicator} from 'react-native-indicators';

import noData from '../assets/Icons/noData.png';

const ProductComponent = props => {
  const navigation = useNavigation();

  const propsData = props;

  const [skip, setSkip] = useState(0);
  const [emptyState, setEmptyState] = useState(false);

  const handleLoadMore = () => {
    console.log('handleLoadMore');
    setSkip(skip + 10);

    if (props.productData.length >= 10) {
      props.getAllProduct(skip, 10, props.productData);
    }
  };

  const renderFooter = () => {
    return (
      <View>
        {props.productData.length >= 10 ? (
          <View
            style={{marginTop: '2%', marginBottom: 10, alignItems: 'center'}}>
            <View style={Style.btnLoad}>
              {props.loadingIndicate ? (
                <BarIndicator color="black" size={20} />
              ) : undefined}
            </View>
          </View>
        ) : undefined}
      </View>
    );
  };

  const onRefresh = () => {
    props.setIsLoading(true);
    props.getAllProduct(0, 10, []);
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

  const renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={Style.productCard}
        onPress={() => {
          props.getProductDetails(item.id)
        }}>
        <Text style={Style.cardTitleText} allowFontScaling={false}>
          {item.title}
        </Text>
        <Text
          style={Style.cardDescriptionText}
          allowFontScaling={false}
          numberOfLines={1}>
          {item.description}
        </Text>
        <Image style={Style.imageView} source={{uri: item.thumbnail}} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={Style.mainView}>
      <FlatList
        style={Style.flatList}
        data={props.productData}
        renderItem={renderRow}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={item => handleLoadMore(item)}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.08}
        refreshControl={
          <RefreshControl refreshing={props.isLoading} onRefresh={onRefresh} />
        }
        numColumns={0}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
    loadingIndicate: state.main.loadingIndicate,
    isLoading: state.main.isLoading,
    productData: state.main.productData,
  };
};

export default connect(mapStateToProps, {
  getAllProduct,
  setIsLoading,
  setSelectTab,
  getProductDetails
})(ProductComponent);
