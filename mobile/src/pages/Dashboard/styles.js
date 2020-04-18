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
export const AvatarInitials = styled.View`
  background: #f4effc;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
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

export const ButtonStatus = styled.TouchableOpacity`
  border-style: solid;
  border-bottom-color: ${(props) => (props.status ? '#7d40e7' : '#fff')};
  border-bottom-width: 1px;
  margin-left: 10px;
`;

export const DeliveryStatus = styled.Text`
  color: ${(props) => (props.status ? '#7d40e7' : '#999')};
  font-weight: bold;
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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 5},
})``;
