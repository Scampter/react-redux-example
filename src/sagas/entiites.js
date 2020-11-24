import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { loadPeopleSuccess, LOAD_PEOPLE } from '../actions/people';
import { fetchResource } from '../util/helpers';

function* fetchPeople(action) {
  let resource = 'people';
  const page = action.page;
  if (page) {
    resource += '?page=' + page;
  }
  const response = yield call(() => fetchResource(resource));
  console.log(response);
  yield put(loadPeopleSuccess(response));
}

function* loadPeople() {
  yield takeEvery(LOAD_PEOPLE, fetchPeople);
}

export default function* rootSaga() {
  yield all([
    fork(loadPeople),
  ])
}
