import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/** 
 * To be used to guard a routes without valid authentication
 * import { AuthGuard } from './guards/auth-guard';
*/






export const Loading: React.FC = () => {
    return (
        <>
            Loading...
    </>
    );
}


export const ManagePropertyComponent = Loadable({
    loader: () => import('../../containers/manage-property'),
    loading: Loading,
});

export const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact={true} path="/manage-property" component={ManagePropertyComponent} />
            {/* Auth Guard 
            <AuthGuard path="/my-account" component={ ......component   } /> */}
            <Redirect from="/" to="/manage-property" />
        </Switch>
    </Router>
);