import React, { useState, useEffect } from 'react';
import { Container, Info } from './styles';

import api from '~/services/api';

export default function ProblemModal({ id }) {
  const [problems, setProblem] = useState([]);

  useEffect(() => {
    async function loadProblem() {
      const response = await api.get(`/delivery/${id}/problem`);
      const data = response.data.map((problems) => ({
        ...problems,
      }));

      setProblem(data);
    }

    loadProblem();
  }, [id]);

  return (
    <>
      <Container>
        <strong>Visualizar problema</strong>
        {problems.map((problem) => (
          <Info key={problem.id}>
            <p>{problem.description}</p>
          </Info>
        ))}
      </Container>
    </>
  );
}
