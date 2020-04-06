import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import deliveryman from './deliveryman/sagas';
import recipient from './recipient/sagas';
import order from './order/sagas';
import problem from './problem/sagas';

export default function* rootSaga() {
  return yield all([auth, user, deliveryman, recipient, order, problem]);
}
