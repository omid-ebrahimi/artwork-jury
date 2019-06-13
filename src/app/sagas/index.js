import {put, takeEvery, all, call} from 'redux-saga/effects';
import {LOGIN} from '../actions';
import {token} from '../store/slices';

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* login({payload}) {
    yield put(token.actions.startFetching());
    yield call(delay, 1000);
    const tokenObj = {
        "access_token": "fczaccTBcV4SFsG6eghDcYzng6hVGp",
        "expires_in": 900,
        "token_type": "Bearer",
        "scope": "read write groups",
        "refresh_token": "2s0yFmDaKzyf8XkPtBlfjRwyLCQ0GbX"
    };
    yield put(token.actions.fetchSuccess({data: tokenObj, expiryDate: new Date()}));
}

function* watchLogin() {
    yield takeEvery(LOGIN, login);
}

export default function* rootSaga() {
    yield all([
        watchLogin()
    ])
}