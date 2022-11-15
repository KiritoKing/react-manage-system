import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Pages/Login";
import { store } from "./Redux/store";
import Home from "./Pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
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
