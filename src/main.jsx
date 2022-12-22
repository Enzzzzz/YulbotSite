import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Comandos, Configuracao, Sobre, Suporte } from './components'
import Home from './components/Home'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/comandos",
    element: <Comandos />
  },
  {
    path: "/config",
    element: <Configuracao />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/suporte',
    element: <Suporte />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
