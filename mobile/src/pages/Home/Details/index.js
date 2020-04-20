import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar} from 'react-native';

import api from '~/services/api';
import DefaultContainer from '~/components/DefaultContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Info,
  Header,
  Title,
  Detail,
  ViewRow,
  Label,
  Name,
  ButtonActions,
  ViewButton,
  Border,
  LabelButton,
} from './styles';

export default function Details({route, navigation}) {
  const {data} = route.params;

  return (
    <DefaultContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Info>
        <Header>
          <Icon name="local-shipping" size={25} color="#7D40E7" />
          <Title>Informações da entrega {data.id}</Title>
        </Header>

        <Detail>
          <Label>DESTINATÁRIO</Label>
          <Name>{data.recipient.name}</Name>
        </Detail>

        <Detail>
          <Label>ENDEREÇO DE ENTREGA</Label>
          <Name>
            Rua {data.recipient.street}, {data.recipient.number},{' '}
            {data.recipient.city} - {data.recipient.state},{' '}
            {data.recipient.zip_code}
          </Name>
        </Detail>

        <Detail>
          <Label>PRODUTO</Label>
          <Name>{data.product_name}</Name>
        </Detail>
      </Info>

      <Info>
        <Header>
          <Icon name="event" size={25} color="#7D40E7" />
          <Title>Situação da entrega</Title>
        </Header>

        <Detail>
          <Label>STATUS</Label>
          <Name>Pendente</Name>
        </Detail>

        <ViewRow>
          <Detail>
            <Label>DATA DE RETIRADA</Label>
            {data.dateFormatted ? (
              <Name>{data.dateFormatted}</Name>
            ) : (
              <Name>--/--/--</Name>
            )}
          </Detail>

          <Detail>
            <Label>DATA DE ENTREGA</Label>
            <Name>--/--/--</Name>
          </Detail>
        </ViewRow>
      </Info>

      <Info
        style={{
          backgroundColor: '#F8F9FD',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <ViewButton>
            <ButtonActions
              onPress={() => navigation.navigate('Problems', {id: data.id})}>
              <Icon name="highlight-off" size={25} color="#E74040" />
              <LabelButton>Informar problemas</LabelButton>
            </ButtonActions>
          </ViewButton>

          <Border>
            <ViewButton>
              <ButtonActions
                onPress={() =>
                  navigation.navigate('ShowProblems', {id: data.id})
                }>
                <Icon name="info-outline" size={25} color="#E7BA40" />
                <LabelButton>Visualizar problemas</LabelButton>
              </ButtonActions>
            </ViewButton>
          </Border>

          <ViewButton>
            <ButtonActions
              onPress={() => navigation.navigate('Confirm', {id: data.id})}>
              <MCIcon name="check-circle-outline" size={25} color="#7D40E7" />
              <LabelButton>Confirmar entrega</LabelButton>
            </ButtonActions>
          </ViewButton>
        </View>
      </Info>
    </DefaultContainer>
  );
}
