import React from 'react';
import {View} from 'react-native';

import {Container, Background, Content} from './styles';

export default function DefaultContainer({children}) {
  return (
    <Container>
      <Background></Background>
      <Content>{children}</Content>
    </Container>
  );
}
