import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {ApolloProvider} from '@apollo/client';
import {client} from './graphql/client';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    );
};

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
