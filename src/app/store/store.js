import {configureStore} from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import {persistedReducer} from './reducer';
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();

/* global process */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware], // to avoid default middleware
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);