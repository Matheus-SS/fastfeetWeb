import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  height: 150px;
  background: #7d40e7;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
  top: -8%;
  margin: 0 20px;
  border-radius: 4px;
  background: red;
`;

export const Photo = styled.View`
  position: absolute;
  bottom: 10%;
  left: 45%;
`;
