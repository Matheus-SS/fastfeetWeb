import React, {useState} from 'react';
import {Text, Alert} from 'react-native';

import api from '~/services/api';
import DefaultContainer from '~/components/DefaultContainer';

import {FormInput, Info, SubmitButton} from './styles';

export default function Problems({route}) {
  const {id} = route.params;

  const [problem, setProblem] = useState();

  async function handleSubmit() {
    try {
      await api.post(`delivery/${id}/problem`, {
        description: problem,
      });
      setProblem('');
      Alert.alert('Sucesso!', 'Problema enviado com sucesso.');
    } catch (e) {
      Alert.alert('Erro!', 'Falha ao enviar descrição do problema.');
    }
  }
  return (
    <DefaultContainer>
      <Info>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Inclua aqui o problema que ocorreu na entrega"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={problem}
          onChangeText={setProblem}
        />
      </Info>

      <SubmitButton onPress={handleSubmit}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Enviar
        </Text>
      </SubmitButton>
    </DefaultContainer>
  );
}
