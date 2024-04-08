import { Routes, Route } from 'react-router-dom'

import { BUSINESS_ROUTES } from '../common/routers';

const RouterSwitch = () => {
    const routes = Object.keys(BUSINESS_ROUTES).map(routeKey => BUSINESS_ROUTES[routeKey])
    return <Routes>
        {routes.map(({ component, path }) =>
            <Route
                exact
                key={path}
                path={path}
                element={component}
            />
        )}
    </Routes>;
}
export default RouterSwitch;