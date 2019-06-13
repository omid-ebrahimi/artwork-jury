import {createTransform} from 'redux-persist';

export const tokenTransform = createTransform(

    (inboundToken, key = 'expiryDate') => {
        return inboundToken;
    },

    (outboundToken, key = 'expiryDate') => {
        return new Date(outboundToken);
    },
    // define which reducers this transform gets called for.
    { whitelist: ['expiryDate'] }
);
