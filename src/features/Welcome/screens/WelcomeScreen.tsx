import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {
  Ewallet,
  EasyLogin,
  PaymentInformation,
} from '../../../../assets/image/Images';
import {SvgProps} from 'react-native-svg';

interface WelcomeProps {}

interface items {
  id: number;
  title: string;
  image: React.FC<SvgProps>;
}

const WelcomeScreen = (props: WelcomeProps): React.JSX.Element => {
  const items: items[] = [
    {
      id: 1,
      title: 'Browse Product',
      image: Ewallet,
    },
    {
      id: 2,
      title: 'Login faster',
      image: EasyLogin,
    },
    {
      id: 3,
      title: 'Pay easy ',
      image: PaymentInformation,
    },
  ];

  const screenWidth = Dimensions.get('window').width;

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View>
        <item.image />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Carousel
        data={items}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
