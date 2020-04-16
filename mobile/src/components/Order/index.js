import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Container,
  Top,
  Title,
  Status,
  CircleStatus,
  Line,
  Box,
  Label,
  BoxLabel,
  Bottom,
  BoxDetails,
  Info,
  Details,
  ButtonDetails,
  DetailsLink,
} from './styles';

export default function Order({data}) {
  const [date, setDate] = useState(data.start_date);

  async function handle() {
    await api.post(`delivery/${data.id}/withdraw`, {
      start_date: new Date(),
    });
  }

  return (
    <Container>
      <Top>
        <Icon name="local-shipping" color="#7D40E7" size={20} />
        <Title>Encomenda {data.id}</Title>
      </Top>

      <Status>
        <Line></Line>

        <Box>
          <CircleStatus></CircleStatus>
          <BoxLabel>
            <Label>Aguardando Retirada</Label>
          </BoxLabel>
        </Box>

        <Box>
          <CircleStatus></CircleStatus>
          <BoxLabel>
            <Label>Retirada</Label>
          </BoxLabel>
        </Box>

        <Box>
          <CircleStatus></CircleStatus>
          <BoxLabel>
            <Label>Entregue</Label>
          </BoxLabel>
        </Box>
      </Status>

      <Bottom>
        <BoxDetails>
          {date ? (
            <>
              <Info>Data</Info>
              <Details>{data.dateFormatted}</Details>
            </>
          ) : (
            <ButtonDetails onPress={handle}>
              <DetailsLink>Retirar encomenda</DetailsLink>
            </ButtonDetails>
          )}
        </BoxDetails>

        <BoxDetails>
          <Info>Cidade</Info>
          <Details>São pedro da aldeiafdfdfeefefsfe</Details>
        </BoxDetails>

        <ButtonDetails>
          <DetailsLink>Ver detalhes</DetailsLink>
        </ButtonDetails>
      </Bottom>
    </Container>
  );
}
