import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({
    component: Component,
    layout: Layout,
    title = '',
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <Layout title={title}>
                        <Component {...props} />
                    </Layout>
                );
            }}
        />
    );
};

export default PrivateRoute;
