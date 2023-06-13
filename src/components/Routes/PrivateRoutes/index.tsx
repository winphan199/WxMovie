import { Outlet, Navigate } from 'react-router-dom';

import routes from '~/configs/routes';

function PrivateRoutes() {
  const auth = { token: false };

  return auth.token ? <Outlet /> : <Navigate to={routes.login} replace />;
}

export default PrivateRoutes;
