import { Outlet, Navigate } from 'react-router-dom';

import routes from '~/configs/routes';

function RestrictedRoutes() {
  const auth = { token: false };

  return !auth.token ? <Outlet /> : <Navigate to={routes.home} replace />;
}

export default RestrictedRoutes;
