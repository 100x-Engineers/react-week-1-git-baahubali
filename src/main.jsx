import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/app/globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Create0 from './pages/Create0.jsx'
import Create1 from './pages/Create1.jsx'
import Create2 from './pages/Create2.jsx'
import Create3 from './pages/Create3.jsx'
import Create4 from './pages/Create4.jsx'
import { AppProvider } from './context/AppContext';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App> <Create0 /></App>,
  },
  {
    path: 'create1',
    element: <Create1 />
  },
  {
    path: 'create2',
    element: <Create2 />
  },
  {
    path: 'create3',
    element: <Create3 />
  },
  {
    path: 'create4',
    element: <Create4 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider >
      <App >
        <RouterProvider router={router} />
      </App>
    </AppProvider>
  </React.StrictMode>,
)
