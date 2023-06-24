// React -%- ////
import * as React from 'react';

// Packages -%- ////
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components -%- ////
import Error from "./views/general/Error";
import Default from "./views/general/Default";

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////
import "./App.css";

// Styled Components -%- ////

// Application -%- ////
const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

// System -%- ////
