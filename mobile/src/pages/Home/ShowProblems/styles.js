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
  top: -9%;
  margin: 0 20px;
  border-radius: 4px;
  background: #fff;
`;

export const ViewProblem = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 2,
})`
  margin: 5px 0;
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextProblem = styled.Text`
  flex: 1;
  margin-right: 10px;
  text-align: justify;
`;

export const TextProblemDate = styled.Text``;
