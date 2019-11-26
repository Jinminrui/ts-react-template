import LoginPage from 'pages/Login';
import HomePage from 'pages/Home';
import ErrorPage from 'pages/404';
import { FC } from 'react';

export interface RouteItem {
  path: string;
  component?: FC;
  auth?: boolean;
}

const RouteConfig: Array<RouteItem> = [
  {
    path: '/',
    component: HomePage,
    auth: true,
  },
  {
    path: '/home',
    component: HomePage,
    auth: true,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/404',
    component: ErrorPage,
  },
];

export default RouteConfig;
