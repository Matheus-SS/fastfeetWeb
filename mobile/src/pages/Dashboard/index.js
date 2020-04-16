import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {Button} from 'react-native';
import {initialLetter} from '~/utils/formatName';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Order from '~/components/Order';

import {
  Container,
  Header,
  Profile,
  Avatar,
  Info,
  Title,
  Name,
  LogoutButton,
  DeliveryTitleStatus,
  DeliveryStatus,
  List,
} from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const profile = useSelector((state) => state.user.profile);

  const [orders, setOrder] = useState([]);

  async function loadOrder() {
    const response = await api.get(
      `/deliveryman/${profile.id}/pendingDeliveries`,
    );

    const data = response.data.map((order) => ({
      ...order,
      dateFormatted:
        order.start_date &&
        format(parseISO(order.start_date), 'dd/MM/yyyy', {
          locale: pt,
        }),
    }));

    setOrder(data);
  }

  useEffect(() => {
    loadOrder();
  }, []);

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{
              uri: 'https://api.adorable.io/avatar/50/guinho.png',
            }}
          />
          <Info>
            <Title>Bem Vindo de volta,</Title>
            <Name>{profile.name}</Name>
          </Info>
        </Profile>
        <LogoutButton>
          <Icon name="exit-to-app" size={20} color="#E74040" />
        </LogoutButton>
      </Header>

      <Header>
        <Name>Entregas</Name>
        <DeliveryTitleStatus>
          <DeliveryStatus>Pendentes</DeliveryStatus>
          <DeliveryStatus>Entregues</DeliveryStatus>
        </DeliveryTitleStatus>
      </Header>
      <List
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Order data={item} />}
      />
    </Container>
  );
}
