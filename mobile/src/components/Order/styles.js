import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  margin-top: 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Status = styled.View`
  margin-top: 10px;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
`;

export const Line = styled.View`
  height: 2px;
  width: 66%;
  background: #7d40e7;
  z-index: -99999;
  position: absolute;
  top: 15%;
  left: 18%;
`;

export const Box = styled.View`
  align-items: center;
  flex: 1;
`;

export const CircleStatus = styled.View`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  border: 2px solid #7d40e7;
  background: #fff;
`;

export const BoxLabel = styled.View``;

export const Label = styled.Text`
  text-align: center;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const BoxDetails = styled.View`
  width: 33%;
`;

export const Info = styled.Text`
  font-size: 14px;
`;

export const Details = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonDetails = styled.TouchableOpacity``;

export const DetailsLink = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
`;
