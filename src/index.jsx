import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import router from './router'

const app = document.createElement('div')
document.body.appendChild(app)

const root = createRoot(app)

root.render(
  <>
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  </>,
)
