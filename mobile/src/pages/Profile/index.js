import React from 'react';
import {Text, StatusBar} from 'react-native';

import {signOut} from '~/store/modules/auth/actions';
import {useSelector, useDispatch} from 'react-redux';

import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {initialLetter} from '~/utils/formatName';

import {
  Container,
  PictureProfile,
  Avatar,
  AvatarInitials,
  Info,
  Label,
  BoxDetails,
  Details,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const image_url = profile.avatar && profile.avatar.url;
  const image_url_formatted =
    image_url && image_url.replace('localhost', '10.0.2.2');

  const dateFormatted = format(parseISO(profile.createdAt), 'dd/MM/yyyy', {
    locale: pt,
  });

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <PictureProfile>
        {profile.avatar ? (
          <Avatar source={{uri: image_url_formatted}} />
        ) : (
          <AvatarInitials>
            <Text style={{fontWeight: 'bold', fontSize: 60, color: '#A28FD0'}}>
              {initialLetter(profile.name)}
            </Text>
          </AvatarInitials>
        )}
      </PictureProfile>
      <Info>
        <BoxDetails>
          <Label>Nome</Label>
          <Details>{profile.name}</Details>
        </BoxDetails>

        <BoxDetails>
          <Label>Email</Label>
          <Details>{profile.email}</Details>
        </BoxDetails>

        <BoxDetails>
          <Label>Data de cadastro</Label>
          <Details>{dateFormatted}</Details>
        </BoxDetails>
        <LogoutButton onPress={handleLogOut}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Logout
          </Text>
        </LogoutButton>
      </Info>
    </Container>
  );
}
