import styled from 'styled-components/native';

import Input from '~/components/Input';

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

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
  height: 300px;

  background: #fff;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 5px;
  background: #7d40e7;
  padding: 15px;
  border-radius: 4px;
`;
