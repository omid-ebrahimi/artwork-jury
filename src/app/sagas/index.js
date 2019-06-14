import {put, takeEvery, all, call, cancelled} from 'redux-saga/effects';
import {LOGIN} from '../actions';
import {token} from '../store/slices';
import {getToken} from '../api/oAuth2'

export function* login({payload: {username, password}}) {
    try {
        yield put(token.actions.startLoading());
        const {data, expires} = yield call(getToken, username, password);
        yield put(token.actions.loadingSucceed({data, expiryDate: expires}));
    } catch (error) {
        yield put(token.actions.loadingFailed({error: error.message}));
    } finally {
        if (yield cancelled()) {
            yield put(token.actions.stopLoading());
        }
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