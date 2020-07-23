import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ?
                (<Component {...props} />)
                :
                (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Olá</h1>} />
            <PrivateRoute path="/dashboard" component={() => <h1>Pagina inicial</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;