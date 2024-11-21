import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home/Home';
import Solucao from './routes/Solucao/Solucao';
import Sobre from './routes/Sobre/Sobre';
import Login from './routes/Login/Login';
import Cadastrar from './routes/Cadastro/Cadastro';
import Error from './routes/Error/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Rota de erro
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/solucao',
        element: <Solucao />,
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cadastrar',
        element: <Cadastrar />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
