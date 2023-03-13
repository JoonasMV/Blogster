import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
