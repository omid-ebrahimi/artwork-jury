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

function fetchSuccess(state, action) {
    const {data, expiryDate} = action.payload;
    return {...state, data, expiryDate, isFetching: false};
}

// Slice
export const token = createSlice({
    slice: 'token',
    initialState,
    reducers: {
        startFetching: (state) => ({...state, isFetching: true}),
        fetchSuccess,
        clean: () => initialState
    }
});
