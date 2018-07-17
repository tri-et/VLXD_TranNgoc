import _404 from 'pages/404'
import defaultLayout from 'layouts/default'
import loginLayout from 'layouts/login'
import pgProducts from 'pages/products'
import pgSuppliers from 'pages/suppliers'
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
    ],
  },
  {
    // Always leave this as last one
    path: '*',
    component: _404,
  },
]
