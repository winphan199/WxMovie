import routes from '~/configs/routes';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';

interface IRoute {
  path: string;
  component: React.ElementType;
  layout?: React.ElementType | null;
}

const publicRoutes: IRoute[] = [
  { path: routes.home, component: Home },
  // { path: '/upload', component: Upload, layout: null },
];
const privateRoutes: IRoute[] = [{ path: routes.upload, component: Upload }];
const restrictedRoutes: IRoute[] = [{ path: routes.login, component: Login }];

export { publicRoutes, privateRoutes, restrictedRoutes };
