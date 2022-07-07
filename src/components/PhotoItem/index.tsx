import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {PhotoContainer} from './style';
import {AppRoute} from '../../core/navigation/app-routes';
import FastImage from 'react-native-fast-image';
import Sizes from '$themes/Sizes';

export interface Props {
  item: {
    id: number;
    webformatURL: string;
  };
}

const imageStyle = {width: Sizes.screen.width - 32, height: 240};

export default function PhotoItem({item}: Props) {
  const navigation = useNavigation();
  const {id, webformatURL} = item;
  return (
    <PhotoContainer
      onPress={() =>
        navigation.navigate(AppRoute.DetailsScreen, {
          photoTitle: `${id}`,
          item: item,
        })
      }>
      <FastImage
        style={imageStyle}
        source={{
          uri: webformatURL,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      {/* <PhotoImage
        source={{
          uri: webformatURL,
        }}
      /> */}
    </PhotoContainer>
  );
}
