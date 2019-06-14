import {put, takeEvery, all, call} from 'redux-saga/effects';
import {LOGIN} from '../actions';
import {token} from '../store/slices';
import {getToken} from '../api/oAuth2'

export function* login({payload: {username, password}}) {
    try {
        yield put(token.actions.startLoading());
        const {data, expires} = yield call(getToken, username, password);
        yield put(token.actions.saveToken({data, expiryDate: expires}));
    } catch (error) {

    } finally {
        yield put(token.actions.stopLoading());
    }
}

function* watchLogin() {
    yield takeEvery(LOGIN, login);
}

export default function* rootSaga() {
    yield all([
        watchLogin()
    ])
}