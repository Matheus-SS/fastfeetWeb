import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import {Alert} from 'react-native';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

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

export default function Order({data, onLoadOrder}) {
  const [date, setDate] = useState(data.dateFormatted);

  async function handleWithdraw() {
    try {
      await api.post(`delivery/${data.id}/withdraw`, {
        start_date: new Date(),
      });

      Alert.alert('Sucesso!!!', 'Retirada concluída');
      onLoadOrder();
    } catch (err) {
      Alert.alert(
        'Erro ao fazer retirada!!!',
        'Verifique se: Está no horário permitido. Se já fez o máximo de retiradas diárias ou se já retirou a encomenda.',
      );
    }
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
          <CircleStatus labelStatus={data.id}></CircleStatus>
          <BoxLabel>
            <Label>Aguardando Retirada</Label>
          </BoxLabel>
        </Box>

        <Box>
          <CircleStatus labelStatus={data.start_date}></CircleStatus>
          <BoxLabel>
            <Label>Retirada</Label>
          </BoxLabel>
        </Box>

        <Box>
          <CircleStatus labelStatus={data.end_date}></CircleStatus>
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
              <Details>{date}</Details>
            </>
          ) : (
            <ButtonDetails onPress={handleWithdraw}>
              <DetailsLink>Retirar encomenda</DetailsLink>
            </ButtonDetails>
          )}
        </BoxDetails>

        <BoxDetails>
          <Info>Cidade</Info>
          <Details>{data.recipient.city}</Details>
        </BoxDetails>

        <ButtonDetails>
          <DetailsLink>Ver detalhes</DetailsLink>
        </ButtonDetails>
      </Bottom>
    </Container>
  );
}
