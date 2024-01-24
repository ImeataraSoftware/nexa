import Layout from '@/layouts'
import Config from '@/pages/config'
import Home from '@/pages/home'
import Inventory from '@/pages/inventory'
import NotFound from '@/pages/notFound'
import Product from '@/pages/product'
import Support from '@/pages/support'
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
        path: 'inventory',
        element: <Inventory />,
      },
      {
        path: 'support',
        element: <Support />,
      },
      {
        path: 'config',
        element: <Config />,
      },
    ],
  },
])

export default router
