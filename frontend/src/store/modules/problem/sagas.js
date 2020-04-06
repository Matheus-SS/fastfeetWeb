import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* cancelOrder({ payload }) {
  //
  try {
    const { id } = payload;

    yield call(api.delete, `problem/${id}/cancel-delivery`);

    toast.success('Encomenda cancelada com sucesso!');
  } catch (error) {
    toast.error('Encomenda já cancelada');
  }
}
export default all([takeLatest('@problem/CANCEL_REQUEST', cancelOrder)]);
