import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/ProductDetailsStyle';
import Carousel from 'react-native-snap-carousel';
import {Slider} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {setSelectTab} from '../actions/FooterActions';
import StarRating from 'react-native-star-rating';

import back from '../assets/back.png';

const ProductDetails = props => {
  const navigation = useNavigation();

  const [ref, setRef] = useState();
  const [value, setvalue] = useState(0.1);

  const renderItem = ({item, index}) => {
    return (
      <View style={Style.imageCardView}>
        <Image
          source={{
            uri: item.image,
          }}
          style={Style.imageStyle}
        />
      </View>
    );
  };

  return (
    <View style={Style.mainContainer}>
      <TouchableOpacity
        style={Style.backView}
        onPress={() => {
          props.setSelectTab('home');
        }}>
        <Image source={back} style={Style.backImageStyle} />
      </TouchableOpacity>
      <View
        style={{
          height: hp('24'),
        }}>
        <Carousel
          layout={'default'}
          layoutCardOffset={'18'}
          ref={ref1 => setRef(ref1)}
          data={props.productDetails.images}
          sliderWidth={wp(95)}
          itemWidth={wp(80)}
          renderItem={renderItem}
          onSnapToItem={index => {}}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Style.detailsView}>
          <Text style={Style.cardTitleText} allowFontScaling={false}>
            {props.productDetails.title}
          </Text>
          <Text style={Style.cardDescriptionText} allowFontScaling={false}>
            {props.productDetails.description}
          </Text>
        </View>

        <View style={Style.priceView}>
          <Text
            style={Style.priceText}
            allowFontScaling={false}
            numberOfLines={1}>
            Price
          </Text>
          <Text
            style={Style.priceText}
            allowFontScaling={false}
            numberOfLines={1}>
            {props.productDetails.price}$
          </Text>
        </View>

        <View style={Style.priceView}>
          <Text
            style={Style.priceText}
            allowFontScaling={false}
            numberOfLines={1}>
            FeedBack
          </Text>
          <View>
            <StarRating
              disabled={true}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              maxStars={5}
              rating={props.productDetails.rating}
              selectedStar={rating => {}}
              fullStarColor={'#6558f5'}
              containerStyle={{
                backgroundColor: 'transparent',
                borderRadius: 15,
                // padding: 10,
              }}
              starStyle={{marginLeft: 6}}
              starSize={20}
            />
          </View>
        </View>

        <View style={Style.QuentityView}>
          <Text
            style={Style.priceText}
            allowFontScaling={false}
            numberOfLines={1}>
            Quantity
          </Text>
          <View style={Style.slideView}>
            <Text
              style={Style.priceText}
              allowFontScaling={false}
              numberOfLines={1}>
              1
            </Text>
            <Slider
              minimumTrackTintColor={'#6558f5'}
              maximumTrackTintColor="gray"
              thumbTintColor={'#6558f5'}
              thumbStyle={{width: 15, height: 15}}
              onValueChange={ChangedValue => {
                setvalue(+ChangedValue.toFixed(1));
              }}
              value={value}
              style={{width: wp(45)}}
            />
            <Text
              style={Style.priceText}
              allowFontScaling={false}
              numberOfLines={1}>
              {value * 10}
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={Style.btn} onPress={() => {}}>
        <Text style={Style.btnTxt}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectTab: state.main.selectTab,
    productDetails: state.main.productDetails,
  };
};

export default connect(mapStateToProps, {
  setSelectTab,
})(ProductDetails);
