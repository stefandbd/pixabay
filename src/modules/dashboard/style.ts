import styled from 'styled-components/native';
import {Colors} from '$themes/index';

export const ScrollView = styled.ScrollView`
  padding-top: 24px;
  background-color: ${Colors.white};
`;

export const NoItemsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
`;
