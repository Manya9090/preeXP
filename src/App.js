import React from "react";
import Login from "./Components/ETLogin";
import Home from "./Components/ETHomePage";
import { initializeIcons } from "@fluentui/react";
import { createHashRouter, RouterProvider } from "react-router-dom";

initializeIcons();
function App() {
  const NewRouter = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/HomePage",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={NewRouter} />
    </>
  );
}

export default App;
