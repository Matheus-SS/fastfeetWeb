import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import PopUp from '~/components/Popup';

import { Container, ContainerTable, Table, TableRow } from './styles';

export default function ProblemTable() {
  const [ListProblem, setListProblem] = useState([]);

  //LIST ALL PROBLEMS
  useEffect(() => {
    async function loadListProblem() {
      const response = await api.get('/delivery/problem', {
        params: {
          page: 1,
        },
      });

      const data = response.data.map((problem) => ({
        ...problem,
      }));

      setListProblem(data);
    }
    loadListProblem();
  }, []);

  return (
    <>
      <Container>
        <strong>Problemas na Entrega</strong>
      </Container>
      <ContainerTable>
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {ListProblem.map((problem) => (
              <TableRow key={problem.id}>
                <td>#{problem.delivery_id}</td>

                <td className="desc">{problem.description}</td>

                <td>
                  <PopUp
                    delete="Cancelar encomenda"
                    view="Visualizar"
                    name="problem"
                    id={problem.delivery_id}
                    id_problem={problem.id}
                  />
                </td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ContainerTable>
    </>
  );
}
