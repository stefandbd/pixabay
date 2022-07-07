import {Sizes, Colors} from '$themes/index';
import styled from 'styled-components/native';

export const ContainerView = styled.View`
  background-color: ${Colors.white};
`;

export const PhotoImage = styled.Image`
  width: ${Sizes.screen.width}px;
  height: 240px;
`;

export const TagsContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: ${Sizes.gutterSize * 2}px;
`;

export const Tag = styled.View`
  justify-content: center;
  margin-left: ${Sizes.gutterSize}px;
  height: 28px;
  background-color: #d0def7;
  border-radius: ${Sizes.gutterSize}px;
  padding-horizontal: ${Sizes.gutterSize}px;
  border-width: 1px;
  border-color: #abbee0;
`;

export const TagText = styled.Text`
  font-size: ${Sizes.gutterSize * 2}px;
  color: black;
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  padding-horizontal: ${Sizes.gutterSize * 2}px;
`;

export const DownloadsContainer = styled.View`
  background-color: #6a87b8;
  justify-content: center;
  margin-top: ${Sizes.gutterSize * 3}px;
  width: ${Sizes.screen.widthHalf - 24}px;
  border-radius: 4px;
  padding: ${Sizes.gutterSize * 2}px;
  height: 60px;
`;

export const LikesContainer = styled.View`
  background-color: #65b8aa;
  justify-content: center;
  margin-top: ${Sizes.gutterSize * 3}px;
  width: ${Sizes.screen.widthHalf - 24}px;
  border-radius: ${Sizes.gutterSize / 2}px;
  padding: ${Sizes.gutterSize * 2}px;
  margin-left: ${Sizes.gutterSize * 2}px;
  height: 60px;
`;

export const LikesDownloadsText = styled.Text`
  font-size: ${Sizes.gutterSize * 2}px;
  color: white;
  text-align: center;
`;

export const LikesDownloadsTextBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

export const AuthorContainer = styled.View`
  margin-top: ${Sizes.gutterSize * 2}px;
  align-items: center;
`;

export const Author = styled.Text`
  font-size: ${Sizes.gutterSize * 2}px;
  color: black;
  font-weight: bold;
`;

export const ResolutionContainer = styled.View`
  position: absolute;
  top: 220px;
  right: ${Sizes.gutterSize}px;
`;

export const Resolution = styled.Text`
  font-size: 12px;
  color: black;
`;
