import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';

import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Background,
  Content,
  ViewProblem,
  TextProblem,
  TextProblemDate,
} from './styles';
import api from '~/services/api';

export default function ShowProblems({route}) {
  const {id} = route.params;

  const [problem, setProblem] = useState([]);
  console.tron.log(problem.length);
  useEffect(() => {
    async function loadProblem() {
      const response = await api.get(`/delivery/${id}/problem`);

      const data = response.data.map((problems) => ({
        ...problems,
        dateFormatted:
          problems.createdAt &&
          format(parseISO(problems.createdAt), 'dd/MM/yyyy', {
            locale: pt,
          }),
      }));

      setProblem(data);
    }
    loadProblem();
  }, []);
  return (
    <Container>
      <Background>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          Encomenda {id}
        </Text>
      </Background>
      <Content>
        <>
          {problem.length !== 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={problem}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <ViewProblem>
                  <TextProblem>{item.description}</TextProblem>
                  <TextProblemDate>{item.dateFormatted}</TextProblemDate>
                </ViewProblem>
              )}
            />
          ) : (
            <ViewProblem>
              <TextProblemDate>Nenhum problema com a encomenda</TextProblemDate>
            </ViewProblem>
          )}
        </>
      </Content>
    </Container>
  );
}
