import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import * as ReactDOM from "react-dom/client"; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Start from "./top-down/start";
import ErrorPage from "./error-page";
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

const helmetContext = {};

const router = createBrowserRouter([
  {
    path: "/page2/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/page2/project/",
    element: <Start />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);