import {put, takeEvery, all, call} from 'redux-saga/effects';
import {LOGIN} from '../actions';
import {token} from '../store/slices';
import {getToken} from '../api/oAuth2'

export function* login({payload: {username, password}}) {
    yield put(token.actions.startFetching());
    const {data, expires} = yield call(getToken, username, password);
    yield put(token.actions.fetchSuccess({data, expiryDate: expires}));
}

function* watchLogin() {
    yield takeEvery(LOGIN, login);
}

export default function* rootSaga() {
    yield all([
        watchLogin()
    ])
}