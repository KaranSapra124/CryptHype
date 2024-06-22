import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import CryptoMarket from "./Components/CryptoMarket";

function App() {
  // const appRoutes = createBrowserRouter([
  //   {
  //     element: <Navbar />,
  //     path: "/",
  //     children: [
  //       {
  //         element: <Home />,
  //         path: "/",
  //       },
  //       {
  //         element:<Contact/>,
  //         path:"/contact"
  //       }
  //     ],
  //   },
  // ]);

  const appRoutes = createBrowserRouter([
    {
      element: <Navbar />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Contact />,
          path: "/contact",
        },
        {
          element:<About/>,
          path:"/about"
        },
        {
          element:<CryptoMarket/>,
          path:"/crypto-market"
        }
      ],
    },
  ]);
  return <>{<RouterProvider router={appRoutes} />}</>;
}

export default App;
