import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #fff;
`;
export const PictureProfile = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;
export const AvatarInitials = styled.View`
  background: #f4effc;
  height: 150px;
  width: 150px;
  border-radius: 75px;
  justify-content: center;
  align-items: center;
`;
export const Info = styled.View`
  margin-top: 30px;
  padding: 0 30px;
`;

export const Label = styled.Text`
  color: #666;
  font-size: 14px;
`;
export const BoxDetails = styled.View`
  margin-bottom: 20px;
`;

export const Details = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 5px;
  background: red;
  padding: 15px;
  border-radius: 4px;
`;
