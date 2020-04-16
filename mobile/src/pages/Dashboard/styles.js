import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const DeliveryTitleStatus = styled.View`
  flex-direction: row;
`;

export const DeliveryStatus = styled.Text`
  margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 5},
})``;
