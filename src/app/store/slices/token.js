import {createSlice} from 'redux-starter-kit'

const initialState = {
    data: {
        access_token: null,
        refresh_token: null,
        token_type: null,
        expires_in: null,
        scope: null
    },
    expiryDate: null,
    loading: false,
    error: ''
};

function loadingSucceed(state, action) {
    const {data, expiryDate} = action.payload;
    return {...initialState, data, expiryDate};
}

function loadingFailed(state, action) {
    const {error} = action.payload;
    return {...initialState, error};
}

// Slice
export const token = createSlice({
    slice: 'token',
    initialState,
    reducers: {
        startLoading: (state) => ({...state, loading: true, error: ''}),
        loadingSucceed,
        loadingFailed,
        stopLoading: (state) => ({...state, loading: false}),
        clean: () => initialState
    }
});
