import styled from 'styled-components/native';

export const Info = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 2,
})`
  padding: 10px 15px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Detail = styled.View`
  margin: 7px 0;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
`;

export const Name = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const ButtonActions = styled.TouchableOpacity`
  align-items: center;
`;

export const ViewButton = styled.View`
  flex: 1;
`;

export const Border = styled.View`
  flex: 1;
  border-style: solid;

  border-right-width: 2px;
  border-right-color: #999;

  border-left-width: 2px;
  border-left-color: #999;
`;

export const LabelButton = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #999;
`;
