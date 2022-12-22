import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Comandos from './routes/Comandos'
import Configuracao from './routes/Configuracao'
import Sobre from './routes/Sobre'
import Suporte from './routes/Suporte'
import Home from './routes/Home'
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
