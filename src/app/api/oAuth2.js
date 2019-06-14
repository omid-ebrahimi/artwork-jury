import ClientOAuth2 from 'client-oauth2';
import {AUTHORIZATION_API} from './address';

// Private

const calculateExpiresIn = (expiryDate) => (expiryDate.getTime() - new Date().getTime()) / 1000;

const oAuth2 = new ClientOAuth2({
    accessTokenUri: `${AUTHORIZATION_API}/jury-api/login/`,
    body: {
        client_id: 'Vd3R4YJL1TX4HCC4X97toeK3VvnB2Qqsmh4BDSov',
        client_secret: 'HX5SOKKCZbqAAwczyNDIkeps2mAtIeqNNB3bpZsfd8hX1J83qx2d9uhn2QSZPS4yRzRZoxhBr63MyV2ExUUhI15S1vD7mPcYNNCGBNw2hs6d60EYsbpIFT3TYOIsBCqp'
    },
    headers: {
        Authorization: ''
    }
});

// Public

export async function getToken(username, password) {
    return oAuth2.owner.getToken(username, password)
}

export function createToken(tokenData, expiryDate) {
    tokenData.expires_in = calculateExpiresIn(expiryDate);
    return oAuth2.createToken(tokenData)
}

export const isAuthError = (e) => e.code === 'EAUTH';
