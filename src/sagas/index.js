import { all } from 'redux-saga/effects';
import entitiesSaga from './entiites';

export default function* rootSaga() {
  yield all([
    entitiesSaga(),
  ]);
}
