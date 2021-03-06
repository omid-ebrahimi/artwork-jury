import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './store'

const storeProvider = ({children}) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
);

export default storeProvider;
