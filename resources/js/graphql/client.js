import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import {
    isUserLoggedIn,
    isAdminLoggedIn,
    userLogout,
    adminLogout,
} from '../services/auth';

const httpLink = createHttpLink({
    uri: process.env.MIX_API_ENDPOINT,
});

let userToken = isUserLoggedIn();
let adminToken = isAdminLoggedIn();

const AuthToken = () => {
    if (userToken || adminToken) {
        let token = userToken;
        if (window.location.pathname.search(/^\/admin/g) !== -1) {
            token = adminToken;
        }
        return token;
    }
};

const authLink = setContext((_, {headers}) => {
    const token = AuthToken();
    return {
        headers: {
            ...headers,
            Accept: 'application/json',
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
