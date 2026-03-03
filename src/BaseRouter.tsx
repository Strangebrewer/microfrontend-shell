import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const App1 = lazy(() => import('mfe-app-one/App'));
const App2 = lazy(() => import('mfe-app-two/App'));

export const BaseRouter: FC = () => {
  const routes = [
    {
      path: '/stuff/*',
      Component: App2
    },
    {
      path: '/*',
      Component: App1,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => {
        const { path, Component } = route;
        return <Route key={path} path={path} element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        } />;
      })}
    </Routes>
  );
}