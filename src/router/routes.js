import _404 from 'pages/404'
import defaultLayout from 'layouts/default'
import loginLayout from 'layouts/login'
import pgProducts from 'pages/products'
import pgSuppliers from 'pages/suppliers'
import pgClients from 'pages/clients'
import pgUsers from 'pages/users'
import pgStockins from 'pages/stockins'
import pgStocks from 'pages/stocks'
export default [
  {
    path: '/login',
    component: loginLayout,
  },
  {
    path: '/',
    component: defaultLayout,
    meta: {requiresAuth: true},
    children: [
      {
        path: 'products',
        component: pgProducts,
        meta: {requiresAuth: true},
      },
      {
        path: 'suppliers',
        component: pgSuppliers,
        meta: {requiresAuth: true},
      },
      {
        path: 'clients',
        component: pgClients,
        meta: {requiresAuth: true},
      },
      {
        path: 'users',
        component: pgUsers,
        meta: {requiresAuth: true},
      },
      {
        path: 'stockins',
        component: pgStockins,
        meta: {requiresAuth: true},
      },
      {
        path: 'stocks',
        component: pgStocks,
        meta: {requiresAuth: true},
      },
    ],
  },
  {
    // Always leave this as last one
    path: '*',
    component: _404,
  },
]
