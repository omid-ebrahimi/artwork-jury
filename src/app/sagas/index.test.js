import {call} from 'redux-saga/effects';
import {login, delay} from './index';
import {token} from '../store/slices';

it('does login steps', () => {
    const gen = login();

    const step1Result = gen.next().value;
    expect(
        step1Result
    ).toEqual(
        call(delay, 1000)
    );

    expect(
        gen.next().value
    ).toEqual(
        token.actions.setToken(step1Result, new Date())
    );

    expect(
        gen.next()
    ).toEqual(
        {done: true, value: undefined}
    );
});
