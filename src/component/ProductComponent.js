import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/ProductStyle';

const ProductComponent = props => {
  const navigation = useNavigation();

  return (
    <View style={Style.mainView}>
      <FlatList
        style={Style.flatList}
        data={[1, 2, 3, 4, 5]}
        renderItem={renderRow}
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={this.renderEmpty}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.1}
        numColumns={0}
      />
    </View>
  );
};

const renderRow = ({item}) => {
  return (
    <View style={Style.productCard}>
      <Text style={Style.cardTitleText} allowFontScaling={false}>
        Practical Test
      </Text>
      <Text style={Style.cardDescriptionText} allowFontScaling={false}>
        Practical Test
      </Text>
      <View style={Style.imageView} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
  };
};

export default connect(mapStateToProps, {})(ProductComponent);
