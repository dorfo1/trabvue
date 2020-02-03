import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MyPage from './pages/MyPage/MyPage'
import ApiPage from './pages/ApiPage/ApiPage'

const Routes = () => (
    <Switch>
        <Route exact
            path="/"
            component={MyPage}
        />
        <Route exact
            path="/api"
            component={ApiPage}
        />
        <Route
            component={() => (
                <div>Page not found</div>
            )}
        />
    </Switch>
);


export default Routes;