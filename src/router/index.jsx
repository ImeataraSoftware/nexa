import Layout from '@/layouts'
import Category from '@/pages/category'
import Config from '@/pages/config'
import Home from '@/pages/home'
import NotFound from '@/pages/notFound'
import Product from '@/pages/product'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'category',
        element: <Category />,
      },

      {
        path: 'config',
        element: <Config />,
      },
    ],
  },
])

export default router
