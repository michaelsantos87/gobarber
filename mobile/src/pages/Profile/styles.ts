import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 190 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 20px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 200px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 6px;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  /* margin-top: 64px; */
  align-self: center;
`;
