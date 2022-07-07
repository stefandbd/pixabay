import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {PhotoContainer} from './style';
import {AppRoute} from '../../core/navigation/app-routes';
import FastImage from 'react-native-fast-image';
import Sizes from '$themes/Sizes';
import Orientation, {
  useOrientationChange,
} from 'react-native-orientation-locker';

// //////////////////////////////////////////////////////////////////////////////////
export interface Props {
  item: {
    id: number;
    webformatURL: string;
  };
}

// //////////////////////////////////////////////////////////////////////////////////

const imageStyle = {width: Sizes.screen.width - 32, height: 240};
const landscapeImageStyle = {
  width: Sizes.screen.height - 32,
  height: Sizes.screen.width,
};

// //////////////////////////////////////////////////////////////////////////////////

export default function PhotoItem({item}: Props) {
  const navigation = useNavigation();
  const initial = Orientation.getInitialOrientation();
  const [currentOrientation, setCurrentOrientation] = useState(initial);
  const {id, webformatURL} = item;
  const checkLandscapeOrientation =
    currentOrientation === 'LANDSCAPE-RIGHT' ||
    currentOrientation === 'LANDSCAPE-LEFT';
  useOrientationChange(o => {
    // Handle orientation change
    setCurrentOrientation(o);
  });

  return (
    <PhotoContainer
      onPress={() =>
        navigation.navigate(AppRoute.DetailsScreen, {
          photoTitle: `${id}`,
          item: item,
        })
      }
      isLandscape={checkLandscapeOrientation}>
      <FastImage
        style={checkLandscapeOrientation ? landscapeImageStyle : imageStyle}
        source={{
          uri: webformatURL,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </PhotoContainer>
  );
}
