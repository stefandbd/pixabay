import {Sizes} from 'src/themes';
import styled from 'styled-components/native';

export const PhotoContainer = styled.TouchableOpacity`
  margin-top: ${Sizes.gutterSize * 2}px;
  width: ${Sizes.screen.width}px;
  padding-horizontal: ${Sizes.gutterSize * 2}px;
`;

export const PhotoImage = styled.Image`
  width: ${Sizes.screen.width - 32}px;
  height: 200px;
`;
