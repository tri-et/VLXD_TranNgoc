import _404 from 'pages/404'
import defaultLayout from 'layouts/default'
import pgProducts from 'pages/products'
export default [
  {
    path: '/',
    component: defaultLayout,
    children: [
      {
        path: 'products',
        component: pgProducts,
      },
    ],
  },

  {
    // Always leave this as last one
    path: '*',
    component: _404,
  },
]
