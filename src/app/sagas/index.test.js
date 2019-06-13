import {call, put} from 'redux-saga/effects';
import {login, delay, tokenObj} from './index';
import {token} from '../store/slices';

it('does login steps', () => {
    const gen = login({payload: {}});

    expect(
        gen.next().value
    ).toEqual(
        put(token.actions.startFetching())
    );

    expect(
        gen.next().value
    ).toEqual(
        call(delay, 1000)
    );

    expect(
        gen.next().value
    ).toEqual(
        put(token.actions.fetchSuccess({data: tokenObj, expiryDate: new Date()}))
    );

    expect(
        gen.next()
    ).toEqual(
        {done: true, value: undefined}
    );
});
