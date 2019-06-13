import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'localforage';
import {token} from './slices';
import {tokenTransform} from './transforms/token'

const tokenPersistConfig = {
    key: 'token',
    storage: storage,
    blacklist: ['isFetching'],
    transforms: [tokenTransform]
};

const rootReducer = combineReducers({
    token: persistReducer(tokenPersistConfig, token.reducer)
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['token']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
