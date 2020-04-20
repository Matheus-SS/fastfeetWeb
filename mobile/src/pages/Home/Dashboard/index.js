import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {withNavigationFocus} from '@react-navigation/compat';

import {useSelector, useDispatch} from 'react-redux';

import {initialLetter} from '~/utils/formatName';
import Order from '~/components/Order';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {signOut} from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Profile,
  AvatarInitials,
  Avatar,
  Info,
  Title,
  ButtonStatus,
  Name,
  LogoutButton,
  DeliveryTitleStatus,
  DeliveryStatus,
  List,
} from './styles';

function Dashboard({navigation, isFocused}) {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  const image_url = profile.avatar && profile.avatar.url;
  const image_url_formatted =
    image_url && image_url.replace('localhost', '10.0.2.2');

  const [orders, setOrder] = useState([]);

  const [pending, setPending] = useState(true);
  const [deliveries, setDeliveries] = useState(false);

  async function loadOrder() {
    setPending(true);
    setDeliveries(false);

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
    if (isFocused) {
      loadOrder();
    }
  }, [isFocused]);

  async function loadOrderDelivery() {
    setDeliveries(true);
    setPending(false);

    const response = await api.get(`/deliveryman/${profile.id}/deliveries`);

    const data = response.data.map((order) => ({
      dateFormatted:
        order.start_date &&
        format(parseISO(order.start_date), 'dd/MM/yyyy', {
          locale: pt,
        }),
      ...order,
    }));

    setOrder(data);
  }

  function SingOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header>
        <Profile>
          {profile.avatar ? (
            <Avatar source={{uri: image_url_formatted}} />
          ) : (
            <AvatarInitials>
              <Text
                style={{fontWeight: 'bold', fontSize: 25, color: '#A28FD0'}}>
                {initialLetter(profile.name)}
              </Text>
            </AvatarInitials>
          )}

          <Info>
            <Title>Bem Vindo de volta,</Title>
            <Name>{profile.name}</Name>
          </Info>
        </Profile>
        <LogoutButton onPress={SingOut}>
          <Icon name="exit-to-app" size={20} color="#E74040" />
        </LogoutButton>
      </Header>

      <Header>
        <Name>Entregas</Name>
        <DeliveryTitleStatus>
          <ButtonStatus onPress={loadOrder} status={pending}>
            <DeliveryStatus status={pending}>Pendentes</DeliveryStatus>
          </ButtonStatus>
          <ButtonStatus onPress={loadOrderDelivery} status={deliveries}>
            <DeliveryStatus status={deliveries}>Entregues</DeliveryStatus>
          </ButtonStatus>
        </DeliveryTitleStatus>
      </Header>

      {orders.length !== 0 ? (
        <List
          data={orders}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Order
              data={item}
              onLoadOrder={loadOrder}
              navigation={navigation}
            />
          )}
        />
      ) : (
        <View>
          <Title style={{color: 'red'}}>NADA ENCONTRADO</Title>
        </View>
      )}
    </Container>
  );
}

export default withNavigationFocus(Dashboard);
