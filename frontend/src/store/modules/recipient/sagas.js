import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import {
  saveRecipientRequest,
  updateProfileSuccess,
  updateProfileFailure,
} from './actions';
export function* register({ payload }) {
  //
  const { name, complement, number, street, city, state, zip_code } = payload;

  yield call(api.post, 'recipient', {
    name,
    complement,
    number,
    street,
    city,
    state,
    zip_code,
  });

  toast.success('Destinatário adicionado com sucesso!');
}

export function* deleteRecipient({ payload }) {
  const { id } = payload;

  yield call(api.delete, `recipient/${id}`);
}

export function* sendId({ payload }) {
  const { id } = payload;

  const response = yield call(api.get, `recipient/${id}`);

  const recipient = response.data;

  yield put(saveRecipientRequest(recipient));

  history.push(`recipient/edit`);
}

export function* updateProfile({ payload }) {
  try {
    const {
      id,
      nameFormatted,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    } = payload.data;

    const response = yield call(api.put, `recipient/${id}`, {
      name: nameFormatted,
      street,
      number,
      complement,
      city,
      state,
      zip_code: zipcode,
    });

    toast.success('Destinatário atualizado com sucesso !');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@recipient/REGISTER_REQUEST', register),
  takeLatest('@recipient/DELETE_REQUEST', deleteRecipient),
  takeLatest('@recipient/SEND_ID_RECIPIENT', sendId),
  takeLatest('@recipient/UPDATE_PROFILE_REQUEST', updateProfile),
]);
