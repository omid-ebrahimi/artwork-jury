import {call, put} from 'redux-saga/effects';
import {login} from './index';
import {token} from '../store/slices';
import {getToken} from "../api/oAuth2";

it('should fails with wrong username', () => {
    // arrange
    const username = 'wrong-username';
    const password = '';

    // act
    const gen = login({payload: {username, password}});

    // assert
    expect(
        gen.next().value
    ).toEqual(
        put(token.actions.startLoading())
    );

    expect(
        gen.next().value
    ).toEqual(
        call(getToken, username, password)
    );

    expect(
        gen.next().value
    ).toEqual(
        put(token.actions.loadingFailed({error: "Cannot read property 'data' of undefined"}))
    );
});
