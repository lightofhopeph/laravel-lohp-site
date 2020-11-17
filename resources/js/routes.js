import React, {useState, useEffect, Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './layouts/main/MainLayout';
import PortalLayout from './layouts/portal/PortalLayout';
import profile from './store/profile';

const Home = lazy(() => import('./pages/main/home'));
const Portal = lazy(() => import('./pages/portal'));
const PortalActivities = lazy(() => import('./pages/portal/PortalActivities'));
const Profile = lazy(() => import('./pages/portal/Profile'));
const Blogs = lazy(() => import('./pages/portal/Blogs'));
const BlogsAdminForm = lazy(() => import('./pages/portal/Blogs/form'));
const ActivitiesForm = lazy(() =>
    import('./pages/portal/PortalActivities/form'),
);
const ActivitiesPage = lazy(() => import('./pages/main/ActivitiesPage'));
const BlogsPage = lazy(() => import('./pages/main/BlogsPage'));

const Routes = () => {
    const [profileState, profileActions] = profile();

    useEffect(() => {
        const fetchData = async () => {
            await profileActions.getProfile();
        };
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <div
                        className={`w-screen h-screen flex justify-center items-center`}>
                        <div>Loading...</div>
                    </div>
                }>
                <Switch>
                    <PrivateRoute
                        exact
                        path={`/`}
                        component={Home}
                        layout={MainLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/activities`}
                        component={ActivitiesPage}
                        layout={MainLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/blogs`}
                        component={BlogsPage}
                        layout={MainLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/portal`}
                        component={Portal}
                        layout={PortalLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/portal/profile`}
                        component={Profile}
                        layout={PortalLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/portal/activities`}
                        component={PortalActivities}
                        layout={PortalLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/portal/activities/:type`}
                        component={ActivitiesForm}
                        layout={PortalLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/portal/blogs`}
                        component={Blogs}
                        layout={PortalLayout}
                    />
                    <PrivateRoute
                        exact
                        path={`/portal/blogs/:type`}
                        component={BlogsAdminForm}
                        layout={PortalLayout}
                    />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Routes;
