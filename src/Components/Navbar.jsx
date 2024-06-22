import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Crypto Market",
      path: "/crypto-market",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            {links.map((elem) => (
              <Link
                to={elem.path}
                className="text-white hover:text-black hover:bg-white hover:duration-500 hover:p-2 hover:rounded hover:font-semibold"
                key={elem.title}
              >
                {elem.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
