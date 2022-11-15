import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Pages/Login";
import { store } from "./Redux/store";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Detail from "Pages/Detail";
import About from "Pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "student/:key",
        element: <Detail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
