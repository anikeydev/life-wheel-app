import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'
import PublicResults from './pages/PublicResults'
import AdminPage from './pages/admin/AdminPage'
import RequireAuth from './components/RequireAuth'

const router = new createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <HomePage />
      </RequireAuth>
    ),
  },
  {
    path: '/test',
    element: (
      <RequireAuth>
        <TestPage />
      </RequireAuth>
    ),
  },
  {
    path: '/results',
    element: (
      <RequireAuth>
        <ResultPage />
      </RequireAuth>
    ),
  },
  {
    path: '/results/public/:publicId',
    element: <PublicResults />,
  },
])

export default function App() {
  return (
    <div className="d-flex justify-content-center align-item-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
