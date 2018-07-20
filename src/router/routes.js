import _404 from 'pages/404'
import defaultLayout from 'layouts/default'
import pgProducts from 'pages/products'
import pgSuppliers from 'pages/suppliers'
import pgStockins from 'pages/stockins'
export default [
  {
    path: '/',
    component: defaultLayout,
    children: [
      {
        path: 'products',
        component: pgProducts,
      },
      {
        path: 'suppliers',
        component: pgSuppliers,
      },
      {
        path: 'stockins',
        component: pgStockins,
      },
    ],
  },

  {
    // Always leave this as last one
    path: '*',
    component: _404,
  },
]
