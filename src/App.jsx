import { createBrowserRouter, RouterProvider } from 'react-router';
import { Header } from './pages/Header';
import { Comptabilite } from './pages/Compatibilite';
import { Creer } from './pages/creermon';
import { Notre } from './pages/Notre';
import { Trafic } from './pages/Trafic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    children:[
      {
        index: true,
        element: <Comptabilite/>
      },
      {
        path:"comptabilite",
        element:<Comptabilite/>
      },
       {
        path:"creermon",
        element:<Creer/>
      },
       {
        path:"notre",
        element:<Notre/>
      },
       {
        path:"trafic",
        element:<Trafic/>
      },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}