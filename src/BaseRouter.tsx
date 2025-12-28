import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const App1 = React.lazy(() => import('mfe-app-one/App'));
const App2 = React.lazy(() => import('mfe-app-two/App'));

export const BaseRouter: React.FC = () => {
  const routes = [
    {
      path: '/',
      Component: App1,
    },
    {
      path: '/stuff',
      Component: App2,
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