import { Fragment } from 'react';
import { Routes as PrimaryRoutes, Route } from 'react-router-dom';

import { privateRoutes, publicRoutes, restrictedRoutes } from '~/routes';
import PrivateRoutes from '~/components/Routes/PrivateRoutes';
import PublicRoutes from '~/components/Routes/PublicRoutes';
import RestrictedRoutes from '~/components/Routes/ProtectedRoutes';
import DefaultLayout from '~/layouts/DefaultLayout';
import NotFound from '~/pages/NotFound';

function Routes() {
  return (
    <PrimaryRoutes>
      <Route element={<PrivateRoutes />}>
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          let Layout: any = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Route>
      <Route element={<PublicRoutes />}>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout: any = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Route>
      <Route element={<RestrictedRoutes />}>
        {restrictedRoutes.map((route, index) => {
          const Page = route.component;
          let Layout: any = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Route>
      <Route path="*" element={<NotFound />} />
    </PrimaryRoutes>
  );
}

export default Routes;
