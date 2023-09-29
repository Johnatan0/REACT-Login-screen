import React from 'react'
import ReactDOM from 'react-dom/client'

import{RouterProvider, createBrowserRouter} from 'react-router-dom';

import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import BookMarkApp from './Pages/BookMarkApp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/signUp',
    element: <SignUpPage/>
  },
  {
    path: '/dashboard',
    element: <BookMarkApp/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
