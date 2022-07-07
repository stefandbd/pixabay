import {Sizes, Colors} from '$themes/index';
import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import Orientation, {
  useOrientationChange,
} from 'react-native-orientation-locker';
import {
  ContainerView,
  TagsContainer,
  Tag,
  TagText,
  DownloadsContainer,
  LikesContainer,
  LikesDownloadsText,
  LikesDownloadsTextBold,
  Row,
  AuthorContainer,
  Author,
  ResolutionContainer,
  Resolution,
} from './style';

// //////////////////////////////////////////////////////////////////////////////////

const imageStyle = {width: Sizes.screen.width, height: 260, marginTop: -48};
const landscapeImageStyle = {
  width: Sizes.screen.height - 32,
  height: Sizes.screen.width,
};
const scrollViewContentStyle = {
  backgroundColor: Colors.white,
  flex: 1,
};

const landscapeScrollViewContentStyle = {
  backgroundColor: Colors.white,
};

// //////////////////////////////////////////////////////////////////////////////////

const DetailsScreen = () => {
  const route = useRoute();
  const {webformatURL, likes, user, downloads, tags, imageHeight, imageWidth} =
    route?.params?.item;
  const tagsArray = tags.split(',');
  const initial = Orientation.getInitialOrientation();
  const [currentOrientation, setCurrentOrientation] = useState(initial);
  const checkLandscapeOrientation =
    currentOrientation === 'LANDSCAPE-RIGHT' ||
    currentOrientation === 'LANDSCAPE-LEFT';
  useOrientationChange(o => {
    // Handle orientation change
    setCurrentOrientation(o);
  });

  const renderTag = () => {
    return tagsArray.map((item: string) => {
      return (
        <Tag key={item}>
          <TagText>{item}</TagText>
        </Tag>
      );
    });
  };
  return (
    <ContainerView
      contentContainerStyle={
        checkLandscapeOrientation
          ? landscapeScrollViewContentStyle
          : scrollViewContentStyle
      }>
      <>
        <FastImage
          style={checkLandscapeOrientation ? landscapeImageStyle : imageStyle}
          source={{
            uri: webformatURL,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <ResolutionContainer>
          <Resolution>
            {imageWidth} x {imageHeight}
          </Resolution>
        </ResolutionContainer>
      </>
      <TagsContainer>{renderTag()}</TagsContainer>
      <Row>
        <DownloadsContainer>
          <LikesDownloadsText>Downloads</LikesDownloadsText>
          <LikesDownloadsTextBold>{downloads}</LikesDownloadsTextBold>
        </DownloadsContainer>
        <LikesContainer>
          <LikesDownloadsText>Likes</LikesDownloadsText>
          <LikesDownloadsTextBold>{likes}</LikesDownloadsTextBold>
        </LikesContainer>
      </Row>
      <AuthorContainer>
        <Author>© {user}</Author>
      </AuthorContainer>
    </ContainerView>
  );
};

export default DetailsScreen;
