import { createBrowserRouter, RouterProvider } from 'react-router';
import { Header } from './pages/header';
import { Comptabilite } from './pages/comptabilite';
import { Creer } from './pages/creermon';
import { Notre } from './pages/notre';
import { Trafic } from './pages/trafix';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,  
    children: [
      { index: true, element: <Comptabilite /> },
      { path: 'comptabilite', element: <Comptabilite /> },
      { path: 'creermon', element: <Creer /> },
      { path: 'notre', element: <Notre /> },
      { path: 'trafix', element:<Trafic/> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
