import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes, bootRoutePath } from './utils/routeUtils';

export const BaseRouter: FC = () => {

  return (
    <Routes>
      {routes.map((route) => {
        const { path, normal, delayed } = route;
        const Component = path === bootRoutePath ? delayed : normal;

        return <Route key={path} path={path} element={
          <Suspense
            fallback={<div>Loading and stuff...</div>}
          >
            <Component />
          </Suspense>
        } />;
      })}
    </Routes>
  );
}