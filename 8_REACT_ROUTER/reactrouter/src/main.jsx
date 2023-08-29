import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - Configurando Router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from './routes/home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <Contact />
  }

]);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // 5- Nested routes - identificador unico - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      }, 
      // 7 - Navigate para páginas inexistentes
      {
        path: "oldContact",
        element: <Navigate to="/contact" />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
