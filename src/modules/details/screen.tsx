import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  PhotoImage,
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

const DetailsScreen = () => {
  const route = useRoute();
  const {webformatURL, likes, user, downloads, tags, imageHeight, imageWidth} =
    route?.params?.item;
  const tagsArray = tags.split(',');

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
    <SafeAreaView>
      <ContainerView>
        <PhotoImage
          source={{
            uri: webformatURL,
          }}
        />
        <ResolutionContainer>
          <Resolution>
            {imageWidth} x {imageHeight}
          </Resolution>
        </ResolutionContainer>
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
    </SafeAreaView>
  );
};

export default DetailsScreen;
